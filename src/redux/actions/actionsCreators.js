import {
    ACTIVE_CHAT_ID,
    ADD_MESSAGE,
    ADD_POST, AUTH_ME, CHANGE_PAGE, GET_PROFILE_INFO, GET_TOTAL_USERS,
    GET_USERS, IS_LOADER,
    TOGGLE_FOLLOW,
    UPDATE_MESSAGE,
    UPDATE_POST
} from "./actionType";

export const updatePost = (text) => ({type: UPDATE_POST, text})
export const addPost = () => ({type: ADD_POST})
export const getProfileInfo = (profile) => ({type: GET_PROFILE_INFO, profile})

export const updateMessage = (text) => ({type: UPDATE_MESSAGE, text})
export const addMessage = () => ({type: ADD_MESSAGE})
export const activeChatId = (id) => ({type: ACTIVE_CHAT_ID, id})

export const toggleFollow = (id) => ({type: TOGGLE_FOLLOW, id})
export const getUsers = (users) => ({type: GET_USERS, users})
export const getTotalUsers = (total) => ({type: GET_TOTAL_USERS, total})
export const changePage = (page) => ({type: CHANGE_PAGE, page})
export const isLoaderToggle = (isLoader) => ({type: IS_LOADER, isLoader})

export const authMe = (email, id, login) => ({type: AUTH_ME, data: {email, id, login}})