import { createSlice } from '@reduxjs/toolkit'
import usersAPI from "../../api/users";

const initialState = {
    usersInfo: [],
    currentPage: 1,
    totalUsers: 0,
    countUsers: 5,
    isLoader: false,
    isDisabled: {
        value: false,
        id: []
    },
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        toggleFollow: (state, action) => {
            const user = state.usersInfo.find(user => user.id === action.payload)
            user.followed = !user.followed
        },
        getUsers: (state, action) => {
            state.usersInfo = [...action.payload]
        },
        getTotalUsers: (state, action) => {
            state.totalUsers = action.payload
        },
        changePage: (state, action) => {
            state.currentPage = action.payload
        },
        isLoaderToggle: (state, action) => {
            state.isLoader = action.payload
        },
        isDisabledToggle: (state, action) => {
            state.isDisabled.value = action.payload.isDisabled
            state.isDisabled.value ? state.isDisabled.id.push(action.payload.userId) :
                state.isDisabled.id = state.isDisabled.id.filter(id => id !== action.payload.userId)
        }
    }
})

export default usersSlice.reducer
export const {toggleFollow, getUsers, getTotalUsers,
    changePage, isLoaderToggle, isDisabledToggle} = usersSlice.actions

export const setUsers = (currentPage, countUsers) => async dispatch => {
    dispatch(isLoaderToggle(true))

    const data = await usersAPI.getUsers(currentPage, countUsers)
    if (!data.error) {
        dispatch(isLoaderToggle(false))
        dispatch(getUsers(data.items))
        dispatch(getTotalUsers(data.totalCount))
    }
}

export const onToggleFollow = (userId, followed) => async dispatch => {
    dispatch(isDisabledToggle({isDisabled: true, userId}))
    if (!followed) {
        const data = await usersAPI.followUser(userId)
        data.resultCode === 0 && dispatch(toggleFollow(userId))
        dispatch(isDisabledToggle({isDisabled: false, userId}))
    } else {
        const data = await usersAPI.unFollowUser(userId)
        data.resultCode === 0 && dispatch(toggleFollow(userId))
        dispatch(isDisabledToggle({isDisabled: false, userId}))
    }
}
