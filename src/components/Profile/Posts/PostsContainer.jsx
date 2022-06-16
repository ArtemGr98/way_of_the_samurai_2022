import {addPostCreator, updatePostCreator} from "../../../redux/actions/actionsCreators";
import Posts from "./Posts";

const PostsContainer = (props) => {

    const store = props.store

    const addPost = () => {
        const action = addPostCreator()
        store.dispatch(action)
    }

    const updatePost = (text) => {
        const action = updatePostCreator(text)
        store.dispatch(action)
    }

    return <Posts state={store.getState().profile}
                  addPost={addPost}
                  updatePost={updatePost} />
}

export default PostsContainer