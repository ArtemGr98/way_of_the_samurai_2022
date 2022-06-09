import styles from './Posts.module.scss'
import Post from "./Post/Post";
import Button from "../../../interface/Button/Button";

const Posts = () => {
    return (
        <div className={styles.posts}>
            <div className={styles.textarea_wrapper}>
                <textarea />
                <Button name="add post" />
            </div>
            <div className={styles.posts__wrapper}>
                <div className={styles.posts__title}>
                    My posts
                </div>
                <Post text="post text" like="4" dislike="1" />
            </div>
        </div>
    )
}

export default Posts