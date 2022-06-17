import Post from "./Post/Post";
import styled from "styled-components";
import {InputWrapper, PostsButton, Textarea} from "../../../interface/InputWrapper/InputWrapper";

const PostsTitle = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  padding: 40px 0;
`

const Posts = (props) => {

    const onAddPost = () => {
        props.addPost()
    }

    const onUpdatePost = (e) => {
        const text = e.target.value
        props.updatePost(text)
    }

    return (
        <div>
            <InputWrapper>
                <Textarea onChange={onUpdatePost} value={props.textareaState}/>
                <PostsButton onClick={onAddPost}>
                    add post
                </PostsButton>
            </InputWrapper>
            <div>
                <PostsTitle>
                    My posts
                </PostsTitle>
                {props.postData.map( data => <Post text={data.text} like={data.like} dislike={data.dislike} id={data.id} /> )}
            </div>
        </div>
    )
}

export default Posts