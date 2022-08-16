import { createSlice } from '@reduxjs/toolkit'

const initAppSlice = createSlice({
    name: 'initApp',
    initialState: {
        isInitApp: false
    },
    reducers: {
        initApp: state => {
            state.isInitApp = true
        }
    }
})

export default initAppSlice.reducer
export const {initApp} = initAppSlice.actions