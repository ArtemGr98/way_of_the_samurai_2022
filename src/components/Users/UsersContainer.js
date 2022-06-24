import Users from "./Users";
import {connect} from "react-redux";
import {
    changePage, onToggleFollow, setUsers
} from "../../redux/actions/actionsCreators";
import React from "react";
import Loader from "../common/Loader/Loader";

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
        users: state.users.usersInfo,
        currentPage: state.users.currentPage,
        totalUsers: state.users.totalUsers,
        countUsers: state.users.countUsers,
        isLoader: state.users.isLoader,
        isDisabled: state.users.isDisabled
    }
}



export default connect(mapStateToProps, {
    changePage,
    setUsers,
    onToggleFollow
})(UsersContainer)
