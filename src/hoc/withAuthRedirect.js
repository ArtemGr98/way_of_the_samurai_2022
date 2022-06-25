import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

const withAuthRedirect = (Component) => {

    const RedirectComponent = (props) => {
        if (!props.isAuthMe) return <Navigate to="/login" />
        return <Component {...props} />
    }

    const mapStateToProps = (state) => {
        return {
            isAuthMe: state.authMe.isAuthMe
        }
    }

    const connectRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return connectRedirectComponent
}

export default withAuthRedirect