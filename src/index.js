import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {state, addMessage, addPost, updateMessage, updatePost, subscribe} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'))

export const renderApp = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}
                     updatePost={updatePost}
                     addMessage={addMessage}
                     updateMessage={updateMessage} />
            </BrowserRouter>
        </React.StrictMode>
    );
}

renderApp(state)

subscribe(renderApp)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
