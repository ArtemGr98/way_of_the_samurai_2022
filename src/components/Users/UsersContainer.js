import Users from "./Users";
import {connect} from "react-redux";
import {
    changePage, getTotalUsers, getUsers,
    isLoaderToggle, toggleFollow
} from "../../redux/actions/actionsCreators";
import React from "react";
import axios from "axios";
import Loader from "../common/Loader/Loader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.isLoaderToggle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countUsers}`)
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    this.props.isLoaderToggle(false)
                    this.props.getUsers(response.data.items)
                    this.props.getTotalUsers(response.data.totalCount)
                }
            })
    }

    onChangePage = (pageNum) => {
        this.props.changePage(pageNum)
        this.props.isLoaderToggle(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.countUsers}`)
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    this.props.isLoaderToggle(false)
                    this.props.getUsers(response.data.items)
                    this.props.getTotalUsers(response.data.totalCount)
                }
            })
    }

    render() {
        return <>
            {this.props.isLoader && <Loader />}
            <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                totalUsers={this.props.totalUsers}
                countUsers={this.props.countUsers}
                toggleFollow={this.props.toggleFollow}
                onChangePage={this.onChangePage} />
        </>

    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.usersInfo,
        currentPage: state.users.currentPage,
        totalUsers: state.users.totalUsers,
        countUsers: state.users.countUsers,
        isLoader: state.users.isLoader
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         toggleFollow: (userId) => {
//             dispatch(toggleFollowCreator(userId))
//         },
//         getUsers: (users) => {
//             dispatch(getUsersCreator(users))
//         },
//         getTotalUsers: (total) => {
//             dispatch(getTotalUserCreator(total))
//         },
//         changePage: (pageNum) => {
//             dispatch(changePageCreator(pageNum))
//         },
//         isLoaderToggle: (isLoader) => {
//             dispatch(isLoaderCreator(isLoader))
//         }
//     }
// }

export default connect(mapStateToProps, {toggleFollow, getUsers, getTotalUsers, changePage, isLoaderToggle })(UsersContainer)
