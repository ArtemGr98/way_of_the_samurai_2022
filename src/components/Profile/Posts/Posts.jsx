import Post from "../Post/Post";
import Button from "../../../interface/Button/Button";
import {InputWrapper, PostsTitle} from "./PostsStyled";

const Posts = () => {
    return (
        <div>
            <InputWrapper>
                <textarea />
                <Button name="add post" />
            </InputWrapper>
            <div>
                <PostsTitle>
                    My posts
                </PostsTitle>
                <Post text="post text" like="4" dislike="1" />
                <Post text="post text" like="4" dislike="1" />
            </div>
        </div>
    )
}

export default Posts