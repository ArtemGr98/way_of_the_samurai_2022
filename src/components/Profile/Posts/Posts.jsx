import Post from "./Post";
import styled from "styled-components";
import PostForm from "./PostForm";

const PostsTitle = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  padding: 40px 0;
`

const Posts = (props) => {

    const onSubmitPostForm = (values, {setSubmitting}) => {
        props.addPost(values.post)
        setSubmitting(false);
    }

    return (
        <div>
            <PostForm onSubmitForm={onSubmitPostForm} />
            <div>
                <PostsTitle>
                    My posts
                </PostsTitle>
                {props.postData.map( data => <Post key={data.id} text={data.text} like={data.like} dislike={data.dislike} id={data.id} /> )}
            </div>
        </div>
    )
}

export default Posts