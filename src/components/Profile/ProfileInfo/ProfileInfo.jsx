import background from "../../../img/Profile/background.jpg";
import profileImg from "../../../img/Profile/profileImg.png";
import styled from "styled-components";
import Loader from "../../common/Loader/Loader";

const ProfileImg= styled.div`
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

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Loader />
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
                        {props.profile.aboutMe}
                    </div>
                </ProfileDescription>
            </ProfileInfoWrapper>
        </div>
    )
}

export default ProfileInfo