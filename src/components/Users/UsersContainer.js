import Users from "./Users";
import {connect} from "react-redux";
import {toggleFollowCreator} from "../../redux/actions/actionsCreators";

const mapStateToProps = (state) => {
    return {
        users: state.users.usersInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowCreator(userId))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer