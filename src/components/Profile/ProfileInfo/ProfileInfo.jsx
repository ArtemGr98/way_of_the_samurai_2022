import profileImg from "../../../img/Profile/profileImg.png";
import styled from "styled-components";
import Loader from "../../common/Loader/Loader";
import {useState} from "react";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {savePhotoAsync, updateStatus} from "../../../redux/profile/profile";
import {EditProfileInfoForm} from "./EditProfileInfoForm";

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


const ProfileInfo = ({isMyProfile}) => {
    const dispatch = useDispatch()

    const profileInfo = useSelector(state => state.profile.profileInfo)
    const status = useSelector(state => state.profile.status)

    const [editMode, setEditMode] = useState(false)
    const [editModeStatus, setEditModeStatus] = useState(false)
    const [stateStatus, setStatus] = useState(status)

    useEffect(() => {
        setStatus(status)
    }, [status])

    const editToggle = () => {
        setEditMode(!editMode)
    }
    const editToggleStatus = () => {
        setEditModeStatus(!editModeStatus)
        if (editModeStatus) {
            dispatch(updateStatus(stateStatus))
        }
    }
    const cancel = () => {
        setEditModeStatus(false)
    }
    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }
    const onChangePhoto = (e) => {
        const files = e.target.files
        if (files.length) {
            dispatch(savePhotoAsync(files[0]))
        }
    }

    if (!profileInfo) {
        return <Loader/>
    }
    return (
        <ProfileTop>
            {editMode ? <EditProfileInfoForm profileInfo={profileInfo} setEditMode={setEditMode} /> :
                <ProfileInfoWrapper>
                    <ProfileAva>
                        <img
                            src={profileInfo.photos.large ? profileInfo.photos.large : profileImg}
                            alt="profileImg"/>
                        {isMyProfile && <input type="file" onChange={onChangePhoto}/>}
                    </ProfileAva>
                    <ProfileDescription>
                        <div>
                            {profileInfo.fullName}
                        </div>
                        <div>
                            {editModeStatus ?
                                <div>
                                    <input autoFocus={true} type="text"
                                           value={stateStatus} onChange={onChangeStatus}/>
                                    <button onClick={cancel}>
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
                            {profileInfo.aboutMe ? profileInfo.aboutMe : "aboutMe"}
                        </div>
                    </ProfileDescription>
                </ProfileInfoWrapper>
            }

            {isMyProfile && <EditBtn onClick={editToggle}>edit</EditBtn>}
        </ProfileTop>
    )
}

export default ProfileInfo