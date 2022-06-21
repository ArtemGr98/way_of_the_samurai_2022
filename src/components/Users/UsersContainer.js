import Users from "./Users";
import {connect} from "react-redux";
import {
    changePageCreator,
    getTotalUserCreator,
    getUsersCreator,
    toggleFollowCreator
} from "../../redux/actions/actionsCreators";

const mapStateToProps = (state) => {
    return {
        users: state.users.usersInfo,
        currentPage: state.users.currentPage,
        totalUsers: state.users.totalUsers,
        countUsers: state.users.countUsers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowCreator(userId))
        },
        getUsers: (users) => {
            dispatch(getUsersCreator(users))
        },
        getTotalUsers: (total) => {
            dispatch(getTotalUserCreator(total))
        },
        changePage: (pageNum) => {
            dispatch(changePageCreator(pageNum))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer