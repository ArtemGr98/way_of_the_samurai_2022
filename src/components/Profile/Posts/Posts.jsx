import Post from "./Post/Post";
import styled from "styled-components";
import {InputWrapper, PostsButton, Textarea} from "../../../interface/InputWrapper/InputWrapper";
import React from "react";

const PostsTitle = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  padding: 40px 0;
`

const Posts = (props) => {
    const input = React.createRef()

    const updatePost = () => {
        const text = input.current.value
        props.dispatch({type: "UPDATE-POST", postText: text})
    }

    return (
        <div>
            <InputWrapper>
                <Textarea ref={input} onChange={updatePost} value={props.state.textareaState}/>
                <PostsButton onClick={() => props.dispatch({type: "ADD-POST"})}>
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