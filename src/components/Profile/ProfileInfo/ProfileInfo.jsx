import background from "../../../img/Profile/background.jpg";
import profileImg from "../../../img/Profile/profileImg.png";
import styled from "styled-components";
import Loader from "../../common/Loader/Loader";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {updateStatus} from "../../../redux/profile/profile";

const ProfileImg = styled.div`
  width: 100%;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
  }
`
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


const ProfileInfo = () => {

    const dispatch = useDispatch()

    const profileInfo = useSelector(state => state.profile.profileInfo)
    const status = useSelector(state => state.profile.status)

    const [editMode, setEditMode] = useState(false)
    const [stateStatus, setStatus] = useState(status)

    useEffect(() => {
        setStatus(status)
    }, [status])

    const editToggle = () => {
        setEditMode(!editMode)
        if (editMode) {
            dispatch(updateStatus(stateStatus))
        }
    }

    const cancel = () => {
        setEditMode(false)
    }

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }

    if (!profileInfo) {
        return <Loader/>
    }
    return (
        <div>
            <ProfileImg>
                <img src={background} alt="background"/>
            </ProfileImg>

            <ProfileInfoWrapper>
                <ProfileAva>
                    <img
                        src={profileInfo.photos.large ? profileInfo.photos.large : profileImg}
                        alt="profileImg"/>
                </ProfileAva>
                <ProfileDescription>
                    <div>
                        {profileInfo.fullName}
                    </div>
                    <div>
                        {editMode ?
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
                            </span>
                        }
                        <button onClick={editToggle}>
                            edit
                        </button>
                    </div>
                    <div>
                        {profileInfo.aboutMe ? profileInfo.aboutMe : "aboutMe"}
                    </div>

                </ProfileDescription>
            </ProfileInfoWrapper>
        </div>
    )
}

export default ProfileInfo