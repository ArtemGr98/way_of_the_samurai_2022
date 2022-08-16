import { createSlice } from '@reduxjs/toolkit'
import authAPI from "../../api/auth";
import {initApp} from "../initApp/initApp";

const initialState = {
    authMeData: {
        email: null,
        id: null,
        login: null,
        isAuthMe: false,
    },
    captcha: null
}

const authMeSlice = createSlice({
    name: 'authMe',
    initialState,
    reducers: {
        authMe: (state, action) => {
            state.authMeData = action.payload
        },
        getCaptchaUrlSuccess: (state, action) => {
            state.captcha = action.payload
        }
    }
})

export default authMeSlice.reducer
export const {authMe, getCaptchaUrlSuccess} = authMeSlice.actions

export const setAuthMe = () => async dispatch => {
    const data = await authAPI.authMe()
    if (data.resultCode === 0) {
        const payload = {
            ...data.data,
            isAuthMe: true
        }
        dispatch(authMe(payload))
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
        const payload = {
            ...data.data,
            isAuthMe: false
        }
        dispatch(authMe(payload))
    }
}

export const getCaptchaUrl = () => async dispatch => {
    const captchaUrl = await authAPI.getCaptchaUrl()
    dispatch(getCaptchaUrlSuccess(captchaUrl.url))
}