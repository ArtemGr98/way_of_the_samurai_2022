import {combineReducers, legacy_createStore as createStore} from "redux";
import messageReducer from "./reducers/messageReducer";
import profileReducer from "./reducers/profileReducer";

const reducers = combineReducers({
    messages: messageReducer,
    profile: profileReducer,
})

const store = createStore(reducers)

export default store