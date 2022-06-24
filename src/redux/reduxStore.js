import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import messageReducer from "./reducers/messageReducer";
import profileReducer from "./reducers/profileReducer";
import usersReducer from "./reducers/usersReduser";
import authMeReducer from "./reducers/authMeReduser";
import thunk from "redux-thunk";

const reducers = combineReducers({
    messages: messageReducer,
    profile: profileReducer,
    users: usersReducer,
    authMe: authMeReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store