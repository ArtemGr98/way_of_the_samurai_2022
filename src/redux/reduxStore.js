import {combineReducers, legacy_createStore as createStore} from "redux";
import messageReducer from "./reducers/messageReducer";
import profileReducer from "./reducers/profileReducer";
import usersReducer from "./reducers/usersReduser";

const reducers = combineReducers({
    messages: messageReducer,
    profile: profileReducer,
    users: usersReducer,
})

const store = createStore(reducers)

window.store = store

export default store