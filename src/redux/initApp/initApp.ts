import { createSlice } from '@reduxjs/toolkit'

type initialStateT = {
    isInitApp: boolean
}

const initialState: initialStateT = {
    isInitApp: false
}

const initAppSlice = createSlice({
    name: 'initApp',
    initialState,
    reducers: {
        initApp: state => {
            state.isInitApp = true
        }
    }
})

export default initAppSlice.reducer
export const {initApp} = initAppSlice.actions