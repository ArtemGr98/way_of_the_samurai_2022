import Nav from "./components/Nav/Nav";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import styled from "styled-components";
import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import Loader from "./components/common/Loader/Loader";
import {setAuthMe} from "./redux/authMe/authMe";
import Header from "./components/Header/Header";

const Messages = React.lazy(() => import("./components/Messages/Messages"))
const Users = React.lazy(() => import("./components/Users/Users"))
const Login = React.lazy(() => import("./components/Login/Login"))
const Profile = React.lazy(() => import("./components/Profile/Profile"))

const AppMain = styled.div`
  padding: 2%;
  display: flex;
`
const AppContent = styled.div`
  width: 80%;
`

const App = () => {

    const dispatch = useDispatch()
    const initApp = useSelector(state => state.initApp.isInitApp)

    useEffect(() => {
        dispatch(setAuthMe())
    }, [dispatch])

    if (!initApp) return <Loader/>
    return (
        <div className="app">
            <Header/>
            <AppMain>
                <Nav/>
                <AppContent>
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path="/profile/" element={<Profile/>}>
                                <Route path=":userId" element={<Profile/>}/>
                            </Route>
                            <Route path="/messages/*" element={<Messages/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/users" element={<Users/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
                    </React.Suspense>
                </AppContent>
            </AppMain>
        </div>
    );

}

export default App;
