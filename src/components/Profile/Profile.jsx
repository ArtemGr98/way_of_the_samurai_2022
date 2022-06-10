import background from '../../img/Profile/background.jpg'
import profileImg from '../../img/Profile/profileImg.png'
import Posts from "./Posts/Posts";
import {ProfileImg, ProfileInfo} from "./ProfileStyled";

const Profile = () => {
    return (
        <div>
            <ProfileImg>
                <img src={background} alt="background"/>
            </ProfileImg>

            <ProfileInfo>
                <div className="ava">
                    <img src={profileImg} alt="profileImg"/>
                </div>
                <div className="description">
                    <div>
                        Artem5
                    </div>
                </div>
            </ProfileInfo>

            <Posts />
        </div>
    )
}

export default Profile