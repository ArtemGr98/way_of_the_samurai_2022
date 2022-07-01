import Nav from "./components/Nav/Nav";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import styled from "styled-components";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/LoginContainer";
import React from "react";
import { setAuthMe } from "./redux/actions/actionsCreators";
import {connect} from "react-redux";
import Loader from "./components/common/Loader/Loader";

const AppMain = styled.div`
  padding: 2%;
  display: flex;
`
const AppContent = styled.div`
  width: 80%;
`

class App extends React.Component {

    componentDidMount() {
        this.props.setAuthMe()
    }

    render() {
        if (!this.props.initApp) return <Loader />
        return (
            <div className="app">
                <HeaderContainer />
                <AppMain>
                    <Nav/>
                    <AppContent>
                        <Routes>
                            <Route path="/profile/" element={<ProfileContainer />} >
                                <Route path=":userId" element={<ProfileContainer />} />
                            </Route>
                            <Route path="/messages/*" element={<MessagesContainer />}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/login" element={<LoginContainer/>}/>
                        </Routes>
                    </AppContent>
                </AppMain>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    initApp: state.initApp.isInitApp
})


export default connect(mapStateToProps, {setAuthMe})(App);
