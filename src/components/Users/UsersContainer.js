import Users from "./Users";
import {connect} from "react-redux";
import {
    changePage, getTotalUsers, getUsers,
    isLoaderToggle, toggleFollow
} from "../../redux/actions/actionsCreators";
import React from "react";
import Loader from "../common/Loader/Loader";
import usersAPI from "../../api/users";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.isLoaderToggle(true)

        usersAPI.getUsers(this.props.currentPage, this.props.countUsers)
            .then(data => {
                if (!data.error) {
                    this.props.isLoaderToggle(false)
                    this.props.getUsers(data.items)
                    this.props.getTotalUsers(data.totalCount)
                }
            })
    }

    onChangePage = (pageNum) => {
        this.props.changePage(pageNum)
        this.props.isLoaderToggle(true)

        usersAPI.getUsers(pageNum, this.props.countUsers)
            .then(data => {
                if (!data.error) {
                    this.props.isLoaderToggle(false)
                    this.props.getUsers(data.items)
                    this.props.getTotalUsers(data.totalCount)
                }
            })
    }

    render() {
        return <>
            {this.props.isLoader && <Loader/>}
            <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                totalUsers={this.props.totalUsers}
                countUsers={this.props.countUsers}
                toggleFollow={this.props.toggleFollow}
                onChangePage={this.onChangePage}/>
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

export default connect(mapStateToProps, {
    toggleFollow,
    getUsers,
    getTotalUsers,
    changePage,
    isLoaderToggle
})(UsersContainer)
