import Users from "./Users";
import {connect} from "react-redux";
import React from "react";
import Loader from "../common/Loader/Loader";
import {
    changePage,
    onToggleFollow,
    setUsers,
} from "../../redux/users/users";
import {
    countUsers, currentPage,
    disabled, loader,
    totalUsers, users
} from "../../redux/users/usersSelectors";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setUsers(this.props.currentPage, this.props.countUsers)
    }

    onChangePage = (pageNum) => {
        this.props.changePage(pageNum)
        this.props.setUsers(pageNum, this.props.countUsers)
    }

    render() {
        return <>
            {this.props.isLoader && <Loader/>}
            <Users
                users={this.props.users}
                currentPage={this.props.currentPage}
                totalUsers={this.props.totalUsers}
                countUsers={this.props.countUsers}
                onChangePage={this.onChangePage}
                isDisabled={this.props.isDisabled}
                onToggleFollow={this.props.onToggleFollow}/>
        </>

    }
}

const mapStateToProps = (state) => {
    return {
        users: users(state),
        currentPage: currentPage(state),
        totalUsers: totalUsers(state),
        countUsers: countUsers(state),
        isLoader: loader(state),
        isDisabled: disabled(state)
    }
}



export default connect(mapStateToProps, {
    changePage,
    setUsers,
    onToggleFollow
})(UsersContainer)
