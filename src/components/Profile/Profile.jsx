import background from './img/background.jpg'
import profileImg from './img/profileImg.png'
import './Profile.scss'

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile_img">
                <img src={background} alt="background"/>
            </div>
            <div className="profile_info">
                <div className="profile_info_ava">
                    <img src={profileImg} alt="profileImg"/>
                </div>
                <div className="profile_info_description">
                    <div className="profile_info_description__name">
                        Artem
                    </div>
                </div>
            </div>
            <div>
                posts
            </div>
        </div>
    )
}

export default Profile