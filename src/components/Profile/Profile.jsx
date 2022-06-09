import background from '../../img/Profile/background.jpg'
import profileImg from '../../img/Profile/profileImg.png'
import styles from './Profile.module.scss'
import Posts from "./Posts/Posts";

const Profile = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.profile__img}>
                <img src={background} alt="background"/>
            </div>

            <div className={styles.profile__info}>
                <div className={styles.profile__ava}>
                    <img src={profileImg} alt="profileImg"/>
                </div>
                <div className={styles.profile__description}>
                    <div>
                        Artem5
                    </div>
                </div>
            </div>

            <Posts />
        </div>
    )
}

export default Profile