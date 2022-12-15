import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import authAPI from "../../api/auth";
import {initApp} from "../initApp/initApp";
import {AppDispatch} from "../store";

type authMeDataT = {
    email: null | string,
    id: undefined | string,
    login: null | string,
    isAuthMe: boolean,
}

type initialStateT = {
    authMeData: authMeDataT,
    captcha: null | string,
    error: undefined | string,
    loading: boolean
}

const initialState: initialStateT = {
    authMeData: {
        email: null,
        id: undefined,
        login: null,
        isAuthMe: false,
    },
    captcha: null,
    error: undefined,
    loading: false
}

const authMeSlice = createSlice({
    name: 'authMe',
    initialState,
    reducers: {
        authMe: (state, action: PayloadAction<authMeDataT>) => {
            state.authMeData = action.payload
        },
        getCaptchaUrlSuccess: (state, action: PayloadAction<string>) => {
            state.captcha = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(setAuthMe.pending, (state) => {
                state.loading = true
                state.error = undefined
            })
            .addCase(setAuthMe.fulfilled, (state, {payload}) => {
                state.loading = false

            })
            .addCase(setAuthMe.rejected, (state, action) => {
                state.loading = false
                //state.error = action.payload
            })
    },
})

export default authMeSlice.reducer
export const {authMe, getCaptchaUrlSuccess} = authMeSlice.actions

export const setAuthMe = createAsyncThunk<unknown, void, { dispatch: AppDispatch, rejectValue: string }>(
    'authMe/setAuthMe',
    async(_, {dispatch}) => {
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
)

interface authLoginThunkI {
    loginData: authMeDataT
    setStatus: () => void
}

export const authLogin = createAsyncThunk<unknown, authLoginThunkI, { dispatch: AppDispatch, rejectValue: string }>(
    'authMe/authLogin',
    async({loginData, setStatus}, {dispatch}) => {
        console.log('loginData', loginData)
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
)

export const authLogout = createAsyncThunk<unknown, void, { dispatch: AppDispatch, rejectValue: string }>(
    'authMe/authLogin',
    async (_, {dispatch}) => {
        const data = await authAPI.logout()
        if (data.resultCode === 0) {
            const payload = {
                ...data.data,
                isAuthMe: false
            }
            dispatch(authMe(payload))
        }
    }
)

export const getCaptchaUrl = createAsyncThunk<unknown, void, { dispatch: AppDispatch, rejectValue: string }>(
    'authMe/getCaptchaUrl',
    async (_, {dispatch}) => {
        const captchaUrl = await authAPI.getCaptchaUrl()
        dispatch(getCaptchaUrlSuccess(captchaUrl.url))
    }
)