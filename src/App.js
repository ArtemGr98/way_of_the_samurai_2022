import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {AppMain} from "./AppStyle";

const App = () => {
    return (
        <div className="app">
            <Header />
            <AppMain>
                <Nav />
                <div className="content">
                    <Profile />
                </div>
            </AppMain>
        </div>
    );
}

export default App;
