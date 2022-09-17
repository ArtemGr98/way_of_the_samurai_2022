import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authMeReducer from "./authMe/authMe";
import initAppReducer from "./initApp/initApp";
import profileReducer from "./profile/profile";
import usersReducer from "./users/users";
import messagesReducer from "./messages/messages";
import {profileQueryApi} from "./profile/profileQueryApi";

const rootReducer = combineReducers({
    profile: profileReducer,
    initApp: initAppReducer,
    authMe: authMeReducer,
    users: usersReducer,
    messages: messagesReducer,
    [profileQueryApi.reducerPath]: profileQueryApi.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(profileQueryApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch