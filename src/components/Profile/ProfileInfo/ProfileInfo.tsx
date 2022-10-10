import styled from "styled-components";
import Loader from "../../common/Loader/Loader";
import {ChangeEvent, FC, useState} from "react";
import {useEffect} from "react";
import {EditProfileInfoForm} from "./EditProfileInfoForm";
import {
    useGetProfileInfoQuery,
    useGetStatusQuery, useSavePhotoMutation,
    useUpdateStatusMutation
} from "../../../redux/profile/profileQueryApi";


const ProfileInfoWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  max-height: 300px;
`
const ProfileAva = styled.div`
  width: 20%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`
const ProfileDescription = styled.div`
  width: 80%;
  padding-left: 20px
`
const ProfileTop = styled.div`
  position: relative;
`
const EditBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`

interface ProfileInfoProps {
    userId: string;
    isMyProfile: boolean;
}

const ProfileInfo: FC<ProfileInfoProps> = ({userId, isMyProfile}) => {

    const {data: profileInfo, isLoading, isError, error} = useGetProfileInfoQuery(userId)
    const {data: status} = useGetStatusQuery(userId)

    const [updateStatusMutation] = useUpdateStatusMutation()
    const [savePhoto] = useSavePhotoMutation()

    const [editMode, setEditMode] = useState(false)
    const [editModeStatus, setEditModeStatus] = useState(false)
    const [stateStatus, setStatus] = useState(status)

    useEffect(() => {
        setStatus(status)
    }, [status])

    const editToggleStatus = () => {
        setEditModeStatus(!editModeStatus)
        if (editModeStatus && stateStatus) {
            updateStatusMutation(stateStatus).unwrap()
        }
    }

    const onChangePhoto = async (e: ChangeEvent<HTMLInputElement>) => {
        let target = e.target
        const files = target.files

        if (files) {
            await savePhoto(files[0])
            target.value = ''
        }
    }

    if (isLoading) {
        return <Loader/>
    }

    if (isError) {
        return <div>Error</div>
    }
    
    return (
        <ProfileTop>
            {editMode && profileInfo ? <EditProfileInfoForm profileInfo={profileInfo} setEditMode={setEditMode}/> :
                <ProfileInfoWrapper>
                    <ProfileAva>
                        <img
                            src={profileInfo?.photos?.large && profileInfo.photos.large}
                            alt="profileImg"/>
                        {isMyProfile && <input type="file" onChange={onChangePhoto}/>}
                    </ProfileAva>
                    <ProfileDescription>
                        <div>
                            {profileInfo?.fullName}
                        </div>
                        <div>
                            {editModeStatus ?
                                <div>
                                    <input autoFocus={true} type="text"
                                           value={stateStatus}
                                           onChange={(e) => setStatus(e.currentTarget.value)}/>
                                    <button onClick={() => setEditModeStatus(false)}>
                                        cancel
                                    </button>
                                </div>
                                :
                                <span>
                                {status || "no status"}
                            </span>}
                            {isMyProfile && <button onClick={editToggleStatus}>
                                edit status
                            </button>}
                        </div>
                        <div>
                            {profileInfo?.aboutMe || "aboutMe"}
                        </div>
                    </ProfileDescription>
                </ProfileInfoWrapper>
            }

            {isMyProfile && <EditBtn onClick={() => setEditMode(!editMode)}>edit</EditBtn>}
        </ProfileTop>
    )
}

export default ProfileInfo