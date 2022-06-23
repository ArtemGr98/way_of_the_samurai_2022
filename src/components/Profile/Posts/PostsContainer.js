import {addPost, updatePost} from "../../../redux/actions/actionsCreators";
import Posts from "./Posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        textareaState: state.profile.textareaState,
        postData: state.profile.postData,
    }
}

const PostsContainer = connect(mapStateToProps, {addPost, updatePost})(Posts)

export default PostsContainer