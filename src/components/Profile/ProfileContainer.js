import {connect} from "react-redux";
import React from "react";
import Profile from "./Profile";
import {
    addPost,
    setProfileInfo,
    setStatus,
    updateStatus
} from "../../redux/actions/actionsCreators";

import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import withRouter from "../../hoc/withRouter";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.authMeId
        }
        this.props.setProfileInfo(userId)
        this.props.setStatus(userId)
    }

    render() {
        return <Profile {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile.profileInfo,
        authMeId: state.authMe.id,
        postData: state.profile.postData,
        status: state.profile.status
    }
}

export default compose(
    connect(mapStateToProps, {setProfileInfo, addPost, setStatus, updateStatus}),
    withAuthRedirect,
    withRouter
)(ProfileContainer)
