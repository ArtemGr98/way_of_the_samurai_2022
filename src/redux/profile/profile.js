import profileAPI from "../../api/profile";


const ADD_POST = "ADD_POST"
const GET_PROFILE_INFO = "GET_PROFILE_INFO"
const GET_STATUS = "GET_STATUS"
const DELETE_POST = "DELETE_POST"
const SAVE_PHOTO = 'SAVE_PHOTO'

const initState = {
    postData: [
        {
            text: "post text",
            like: 4,
            dislike: 1,
            id: 1
        },
        {
            text: "post text2",
            like: 43,
            dislike: 12,
            id: 2
        },
        {
            text: "post text3",
            like: 14,
            dislike: 21,
            id: 3
        },
    ],
    profileInfo: null,
    status: '',
}

export default function profileReducer(state = initState, action) {
    switch (action.type) {
        case ADD_POST:
            const post = {
                text: action.post,
                like: 0,
                dislike: 0,
                id: state.postData.length + 1
            }
            return {
                ...state,
                postData: [...state.postData, post]
            }

        case DELETE_POST:
            return {
                ...state,
                postData: [...state.postData.filter(post => post.id !== action.postId)]
            }

        case GET_PROFILE_INFO:
            return {
                ...state,
                profileInfo: action.profile
            }

        case GET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO:
            return {
                ...state, profileInfo: {...state.profileInfo, photos: action.photos}
            }

        default:
            return state
    }
}

export const addPost = post => ({type: ADD_POST, post})
export const getProfileInfo = profile => ({type: GET_PROFILE_INFO, profile})
export const getStatus = status => ({type: GET_STATUS, status})
export const deletePost = postId => ({type: DELETE_POST, postId})
export const savePhotoSuccess = photos => ({type: SAVE_PHOTO, photos})


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

export const savePhoto = photo => async dispatch => {
    const data = await profileAPI.savePhoto(photo)
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))
    }
}

export const editProfileInfo = (profileInfo, myId) => async dispatch => {
    const data = await profileAPI.editProfileInfo(profileInfo)
    if (data.resultCode === 0) {
        dispatch(setProfileInfo(myId))
    }
    return data
}
