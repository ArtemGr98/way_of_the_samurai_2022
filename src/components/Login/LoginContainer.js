import {connect} from "react-redux";
import Login from "./Login";
import {authLogin} from "../../redux/authMe/authMe";

const mapStateToProps = state => {
    return {
        isAuthMe: state.authMe.isAuthMe
    }
}

export default connect(mapStateToProps, {authLogin})(Login)