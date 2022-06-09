import './App.scss';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";

const App = () => {
    return (
        <div className="app">
            <Header />
            <div className="app__main">
                <Nav />
                <div className="app__content">
                    <Profile />
                </div>
            </div>
        </div>
    );
}

export default App;
