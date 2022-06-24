import React from "react"
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthMe} from "../../redux/actions/actionsCreators";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setAuthMe()
    }

    render() {
        return <Header {...this.props.authMeData} />
    }
}

const mapStateToProps = (state) => {
    return {
        authMeData: state.authMe
    }
}

export default connect(mapStateToProps, {setAuthMe})(HeaderContainer)