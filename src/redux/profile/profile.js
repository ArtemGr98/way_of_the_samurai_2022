import profileAPI from "../../api/profile";
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    postData: [
        {
            text: "post text",
            like: 4,
            dislike: 1,
            id: 1
        },
    ],
    profileInfo: null,
    status: '',
}

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        addPost: (state, action) => {
            const post = {
                text: action.payload,
                like: 0,
                dislike: 0,
                id: state.postData.length + 1
            }
            state.postData.push(post)
        },
        deletePost: (state, action) => {
            state.postData.filter(post => post.id !== action.payload)
        },
        getProfileInfo: (state, action) => {
            state.profileInfo = action.payload
        },
        getStatus: (state, action) => {
            state.status = action.payload
        },
        savePhoto: (state, action) => {
            state.profileInfo.photos = action.payload
        }
    }
}) 

export const {addPost, deletePost, getProfileInfo, getStatus, savePhoto} = profileSlice.actions
export default profileSlice.reducer


export const setProfileInfo = userId => async dispatch => {
    const data = await profileAPI.getProfileInfo(userId)
    if (!data.error) {
        dispatch(getProfileInfo(data))
    }
}

export const setStatus = userId => async dispatch => {
    try {
        const status = await profileAPI.getStatus(userId)
        dispatch(getStatus(status))
    } catch(err) {
        console.log(err)
    }
}

export const updateStatus = status => async dispatch => {
    try {
        const data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(getStatus(status))
        }
    } catch (err){
        console.log(err)
    }
}

export const savePhotoAsync = photo => async dispatch => {
    const data = await profileAPI.savePhoto(photo)
    if (data.resultCode === 0) {
        dispatch(savePhoto(data.data.photos))
    }
}

export const editProfileInfo = (profileInfo, myId) => async dispatch => {
    const data = await profileAPI.editProfileInfo(profileInfo)
    if (data.resultCode === 0) {
        dispatch(setProfileInfo(myId))
    }
    return data
}
