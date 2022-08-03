import authAPI from "../../api/auth";
import {initApp} from "../initApp/initApp";


const AUTH_ME = "AUTH_ME"
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS"

const initState = {
    email: null,
    id: null,
    login: null,
    isAuthMe: false,
    captcha: null
}

export default function authMeReducer(state = initState, action) {
    switch (action.type) {
        case AUTH_ME:
            return {
                ...state,
                ...action.data,
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                captcha: action.captchaUrl
            }
        default:
            return state
    }
}

export const authMe = (email, id, login, isAuthMe) => ({type: AUTH_ME, data: {email, id, login, isAuthMe}})
export const getCaptchaUrlSuccess = captchaUrl => ({type: GET_CAPTCHA_URL_SUCCESS, captchaUrl})

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
    }
    else if (data.resultCode === 10) {
        dispatch(getCaptchaUrl())
        setStatus(data.messages[0])
    }
    else {
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

export const getCaptchaUrl = () => async dispatch => {
    const captchaUrl = await authAPI.getCaptchaUrl()
    dispatch(getCaptchaUrlSuccess(captchaUrl.url))
}