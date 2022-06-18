import {addPostCreator, updatePostCreator} from "../../../redux/actions/actionsCreators";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        textareaState: state.profile.textareaState,
        postData: state.profile.postData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator())
        },
        updatePost: (text) => {
            dispatch(updatePostCreator(text))
        },
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer