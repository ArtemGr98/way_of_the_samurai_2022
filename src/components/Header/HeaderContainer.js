import React from "react"
import Header from "./Header";
import {connect} from "react-redux";
import {authMe} from "../../redux/actions/actionsCreators";
import authAPI from "../../api/auth";

class HeaderContainer extends React.Component {

    componentDidMount() {
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                const {email, id, login} = {...data.data}
                this.props.authMe(email, id, login)
            }
        })
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

export default connect(mapStateToProps, {authMe})(HeaderContainer)