import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import styled from "styled-components";
import MessagesContainer from "./components/Messages/MessagesContainer";

const AppMain = styled.div`
  padding: 2%;
  display: flex;
`
const AppContent = styled.div`
  width: 80%;
`

const App = (props) => {
    return (
        <div className="app">
            <Header/>
            <AppMain>
                <Nav/>
                <AppContent>
                    <Routes>
                        <Route path="/profile"
                               element={<Profile store={props.store} />} />
                        <Route path="/messages/*"
                               element={<MessagesContainer store={props.store} />}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </AppContent>
            </AppMain>
        </div>
    );
}

export default App;
