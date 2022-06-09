import profileImg from '../../../../img/Profile/profileImg.png'
import styles from './Post.module.scss'
import Button from "../../../../interface/Button/Button";

const Post = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.post__img}>
                <img src={profileImg} alt="profileImg"/>
            </div>
            <div className={styles.post__wrapper}>
                <div className={styles.post__text}>
                    {props.text}
                </div>
                <div className={styles.post__btn}>
                    <Button name={`like: ${props.like}`} />
                    <Button name={`dislike: ${props.dislike}`} />
                </div>
            </div>
        </div>
    )
}

export default Post