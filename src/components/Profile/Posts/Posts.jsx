import Post from "./Post/Post";
import styled from "styled-components";
import {InputWrapper, PostsButton, Textarea} from "../../../interface/InputWrapper/InputWrapper";
import React from "react";
import {addPostCreator, updatePostCreator} from "../../../actions/actionCreator";

const PostsTitle = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  padding: 40px 0;
`

const Posts = (props) => {
    const input = React.createRef()

    const addPost = () => {
        const action = addPostCreator()
        props.dispatch(action)
    }

    const updatePost = () => {
        const text = input.current.value
        const action = updatePostCreator(text)
        props.dispatch(action)
    }

    return (
        <div>
            <InputWrapper>
                <Textarea ref={input} onChange={updatePost} value={props.state.textareaState}/>
                <PostsButton onClick={addPost}>
                    add post
                </PostsButton>
            </InputWrapper>
            <div>
                <PostsTitle>
                    My posts
                </PostsTitle>
                {props.state.postData.map( data => <Post text={data.text} like={data.like} dislike={data.dislike} id={data.id} /> )}
            </div>
        </div>
    )
}

export default Posts