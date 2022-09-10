import Post from "./Post";
import styled from "styled-components";
import PostForm from "./PostForm";
import { useSelector } from "react-redux";
import {useGetPostsQuery} from "../../../redux/profile/profileQueryApi";
import Loader from "../../common/Loader/Loader";

const PostsTitle = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  padding: 40px 0;
`

const Posts = () => {

    //const postData = useSelector(state => state.profile.postData)
    const {data: postData, isLoading} = useGetPostsQuery()

    return <>
        {isLoading ? <Loader/> :
        <div>
            <PostForm />
            <div>
                <PostsTitle>
                    Posts
                </PostsTitle>
                {postData.map( data => <Post key={data.id} text={data.text} like={data.like} dislike={data.dislike} id={data.id} /> )}
            </div>
        </div>}
    </>

}

export default Posts