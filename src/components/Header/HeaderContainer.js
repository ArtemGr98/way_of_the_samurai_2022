import React from "react"
import Header from "./Header";
import {connect} from "react-redux";
import {authLogout} from "../../redux/authMe/authMe";


class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props.authMeData} authLogout={this.props.authLogout} />
    }
}

const mapStateToProps = (state) => {
    return {
        authMeData: state.authMe
    }
}

export default connect(mapStateToProps, {authLogout})(HeaderContainer)