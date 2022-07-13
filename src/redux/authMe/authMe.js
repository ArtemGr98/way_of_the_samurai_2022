import authAPI from "../../api/auth";
import {initApp} from "../initApp/initApp";


const AUTH_ME = "AUTH_ME"

const initState = {
    email: null,
    id: null,
    login: null,
    isAuthMe: false
}

export default function authMeReducer(state = initState, action) {
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

export const authMe = (email, id, login, isAuthMe) => ({type: AUTH_ME, data: {email, id, login, isAuthMe}})

export const setAuthMe = () => async dispatch => {
    const data = await authAPI.authMe()
    if (data.resultCode === 0) {
        const {email, id, login} = {...data.data}
        dispatch(authMe(email, id, login, true))
    }
    dispatch(initApp())
}

export const authLogin = (loginData, setStatus) => async dispatch => {
    const data = await authAPI.login(loginData)
    if (data.resultCode === 0) {
        dispatch(setAuthMe())
    } else {
        setStatus(data.messages[0])
    }
    return data.resultCode
}

export const authLogout = () => async dispatch => {
    const data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(authMe(null, null, null, false))
    }
}