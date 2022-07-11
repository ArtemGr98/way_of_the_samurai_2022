import {ADD_POST, DELETE_POST, GET_PROFILE_INFO, GET_STATUS} from "../actions/actionType";

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

const profileReducer = (state = initState, action) => {
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

        default:
            return state
    }
}

export default profileReducer;