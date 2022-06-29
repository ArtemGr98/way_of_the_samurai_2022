import {AUTH_ME} from "../actions/actionType";

const initState = {
    email: null,
    id: null,
    login: null,
    isAuthMe: false
}

const authMeReducer = (state = initState, action) => {
    switch (action.type) {
        case AUTH_ME:
            return {
                ...state,
                ...action.data,
            }

        default:
            return state
    }
}

export default authMeReducer