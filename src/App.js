import './App.scss';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="App-container">
                <Nav />
                <div className="content">
                    <Profile />
                </div>
            </div>
        </div>
    );
}

export default App;
