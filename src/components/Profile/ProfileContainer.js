import {connect} from "react-redux";
import React from "react";
import Profile from "./Profile";
import {getProfileInfo} from "../../redux/actions/actionsCreators";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import profileAPI from "../../api/profile";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.authMeId
        }

        profileAPI.getProfileInfo(userId).then(data => {
                if (!data.error) {
                    this.props.getProfileInfo(data)
                }
            })
    }

    render() {
        return <Profile {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile.profileInfo,
        authMeId: state.authMe.id
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default connect(mapStateToProps, {getProfileInfo})(withRouter(ProfileContainer))
