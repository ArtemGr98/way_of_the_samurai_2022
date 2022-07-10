import background from "../../../img/Profile/background.jpg";
import profileImg from "../../../img/Profile/profileImg.png";
import styled from "styled-components";
import Loader from "../../common/Loader/Loader";
import React, { useState } from "react";
import { useEffect } from "react";

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


const ProfileInfo = React.memo((props) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const editToggle = () => {
        setEditMode(!editMode)
        if (editMode) {
            props.updateStatus(status)
        }
    }

    const cancel = () => {
        setEditMode(false)
    }

    const onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }

    if (!props.profile) {
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
                        src={props.profile.photos.large ? props.profile.photos.large : profileImg}
                        alt="profileImg"/>
                </ProfileAva>
                <ProfileDescription>
                    <div>
                        {props.profile.fullName}
                    </div>
                    <div>
                        {editMode ?
                            <div>
                                <input autoFocus={true} type="text"
                                        value={status} onChange={onChangeStatus}/>
                                <button onClick={cancel}>
                                    cancel
                                </button>
                            </div>
                            :
                            <span>
                                {props.status || "no status"}
                            </span>
                        }
                        <button onClick={editToggle}>
                            edit
                        </button>
                    </div>
                    <div>
                        {props.profile.aboutMe ? props.profile.aboutMe : "aboutMe"}
                    </div>

                </ProfileDescription>
            </ProfileInfoWrapper>
        </div>
    )
})

export default ProfileInfo