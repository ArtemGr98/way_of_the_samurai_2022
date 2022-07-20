import Nav from "./components/Nav/Nav";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import styled from "styled-components";
import HeaderContainer from "./components/Header/HeaderContainer";
import React from "react";
import {connect} from "react-redux";
import Loader from "./components/common/Loader/Loader";
import {setAuthMe} from "./redux/authMe/authMe";

const MessagesContainer = React.lazy(() => import("./components/Messages/MessagesContainer"))
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"))
const LoginContainer = React.lazy(() => import("./components/Login/LoginContainer"))
const Profile = React.lazy(() => import("./components/Profile/Profile"))

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
        if (!this.props.initApp) return <Loader/>
        return (
            <div className="app">
                <HeaderContainer/>
                <AppMain>
                    <Nav/>
                    <AppContent>
                        <React.Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                <Route path="/profile/" element={<Profile/>}>
                                    <Route path=":userId" element={<Profile/>}/>
                                </Route>
                                <Route path="/messages/*" element={<MessagesContainer/>}/>
                                <Route path="/news" element={<News/>}/>
                                <Route path="/music" element={<Music/>}/>
                                <Route path="/users" element={<UsersContainer/>}/>
                                <Route path="/settings" element={<Settings/>}/>
                                <Route path="/login" element={<LoginContainer/>}/>
                            </Routes>
                        </React.Suspense>
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
