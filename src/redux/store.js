import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import messageReducer from "./messages/messages";
import profileReducer from "./profile/profile";
import usersReducer from "./users/users";
import authMeReducer from "./authMe/authMe";
import thunk from "redux-thunk";
import initAppReducer from "./initApp/initApp";
import {composeWithDevTools} from "@redux-devtools/extension";

const reducers = combineReducers({
    messages: messageReducer,
    profile: profileReducer,
    users: usersReducer,
    authMe: authMeReducer,
    initApp: initAppReducer,
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store