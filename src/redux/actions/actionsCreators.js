import {
    ACTIVE_CHAT_ID, ADD_MESSAGE, ADD_POST, AUTH_ME,
    CHANGE_PAGE, GET_PROFILE_INFO, GET_STATUS, GET_TOTAL_USERS,
    GET_USERS, IS_DISABLED, IS_LOADER, TOGGLE_FOLLOW,
    UPDATE_MESSAGE, UPDATE_POST
} from "./actionType";
import usersAPI from "../../api/users";
import profileAPI from "../../api/profile";
import authAPI from "../../api/auth";

//actions
export const updatePost = text => ({type: UPDATE_POST, text})
export const addPost = () => ({type: ADD_POST})
export const getProfileInfo = profile => ({type: GET_PROFILE_INFO, profile})
export const getStatus = status => ({type: GET_STATUS, status})

export const updateMessage = text => ({type: UPDATE_MESSAGE, text})
export const addMessage = () => ({type: ADD_MESSAGE})
export const activeChatId = id => ({type: ACTIVE_CHAT_ID, id})

export const toggleFollow = id => ({type: TOGGLE_FOLLOW, id})
export const getUsers = users => ({type: GET_USERS, users})
export const getTotalUsers = total => ({type: GET_TOTAL_USERS, total})
export const changePage = page => ({type: CHANGE_PAGE, page})
export const isLoaderToggle = isLoader => ({type: IS_LOADER, isLoader})
export const isDisabledToggle = (isDisabled, userId) => ({type: IS_DISABLED, isDisabled, userId})

export const authMe = (email, id, login) => ({type: AUTH_ME, data: {email, id, login}})

//thunks
export const setUsers = (currentPage, countUsers) => dispatch => {
    dispatch(isLoaderToggle(true))

    usersAPI.getUsers(currentPage, countUsers)
        .then(data => {
            if (!data.error) {
                dispatch(isLoaderToggle(false))
                dispatch(getUsers(data.items))
                dispatch(getTotalUsers(data.totalCount))
            }
        })
}

export const onToggleFollow = (userId, followed) => dispatch => {
    dispatch(isDisabledToggle(true, userId))
    if (!followed) {
        usersAPI.followUser(userId)
            .then(data => {
                (data.resultCode === 0) && dispatch(toggleFollow(userId))
                dispatch(isDisabledToggle(false, userId))
            })
    } else {
        usersAPI.unFollowUser(userId)
            .then(data => {
                (data.resultCode === 0) && dispatch(toggleFollow(userId))
                dispatch(isDisabledToggle(false, userId))
            })
    }
}

export const setProfileInfo = userId => dispatch => {
    profileAPI.getProfileInfo(userId).then(data => {
        if (!data.error) {
            dispatch(getProfileInfo(data))
        }
    })
}

export const setStatus = userId => dispatch => {
    profileAPI.getStatus(userId).then(status => {
        dispatch(getStatus(status))
    })
}

export const putStatus = status => dispatch => {
    profileAPI.putStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(getStatus(status))
        }
    })
}

export const setAuthMe = () => dispatch => {
    authAPI.authMe().then(data => {
        if (data.resultCode === 0) {
            const {email, id, login} = {...data.data}
            dispatch(authMe(email, id, login))
        }
    })
}
