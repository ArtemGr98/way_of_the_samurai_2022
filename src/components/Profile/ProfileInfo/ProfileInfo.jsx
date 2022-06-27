import background from "../../../img/Profile/background.jpg";
import profileImg from "../../../img/Profile/profileImg.png";
import styled from "styled-components";
import Loader from "../../common/Loader/Loader";
import React from "react";

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


class ProfileInfo extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    editToggle = () => {
        this.setState({
            editMode: !this.state.editMode
        }, () => {
            if (!this.state.editMode) {
                this.props.updateStatus(this.state.status)
            }
        })
    }

    cancel = () => {
        this.setState({
            editMode: false
        })
    }

    onChangeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        if (!this.props.profile) {
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
                            src={this.props.profile.photos.large ? this.props.profile.photos.large : profileImg}
                            alt="profileImg"/>
                    </ProfileAva>
                    <ProfileDescription>
                        <div>
                            {this.props.profile.fullName}
                        </div>
                        <div>
                            {this.state.editMode ?
                                <div>
                                    <input autoFocus={true} type="text"
                                           value={this.state.status} onChange={this.onChangeStatus}/>
                                    <button onClick={this.cancel}>
                                        cancel
                                    </button>
                                </div>
                                :
                                <span>
                                    {this.props.status || "no status"}
                                </span>
                            }
                            <button onClick={this.editToggle}>
                                edit
                            </button>
                        </div>
                        <div>
                            {this.props.profile.aboutMe ? this.props.profile.aboutMe : "aboutMe"}
                        </div>

                    </ProfileDescription>
                </ProfileInfoWrapper>
            </div>
        )
    }
}

export default ProfileInfo