import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authMeReducer from "./authMe/authMe";
import initAppReducer from "./initApp/initApp";
import profileReducer from "./profile/profile";
import usersReducer from "./users/users";
import messagesReducer from "./messages/messages";

const rootReducer = combineReducers({
    profile: profileReducer,
    initApp: initAppReducer,
    authMe: authMeReducer,
    users: usersReducer,
    messages: messagesReducer
})

export const store = configureStore({
    reducer: rootReducer
})