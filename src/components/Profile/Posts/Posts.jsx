import Post from "./Post";
import styled from "styled-components";
import PostForm from "./PostForm";
import React from "react";

const PostsTitle = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  padding: 40px 0;
`

const Posts = React.memo((props) => {
    return (
        <div>
            <PostForm addPost={props.addPost} />
            <div>
                <PostsTitle>
                    My posts
                </PostsTitle>
                {props.postData.map( data => <Post key={data.id} text={data.text} like={data.like} dislike={data.dislike} id={data.id} /> )}
            </div>
        </div>
    )
})

export default Posts