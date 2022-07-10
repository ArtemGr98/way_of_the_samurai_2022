import Post from "./Post";
import styled from "styled-components";
import PostForm from "./PostForm";
import { useSelector } from "react-redux";

const PostsTitle = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  padding: 40px 0;
`

const Posts = () => {

    const postData = useSelector(state => state.profile.postData)

    return (
        <div>
            <PostForm />
            <div>
                <PostsTitle>
                    My posts
                </PostsTitle>
                {postData.map( data => <Post key={data.id} text={data.text} like={data.like} dislike={data.dislike} id={data.id} /> )}
            </div>
        </div>
    )
}

export default Posts