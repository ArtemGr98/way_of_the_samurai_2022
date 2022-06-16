import {ADD_POST, UPDATE_POST} from "../actions/actionType";

const initState =  {
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
    textareaState: '',
}

const profileReducer = (state = initState, action) => {

    switch (action.type) {
        case UPDATE_POST:
            state.textareaState = action.postText
            return state

        case ADD_POST:
            const statePost = state.postData

            const post = {
                text: state.textareaState,
                like: 0,
                dislike: 0,
                id: statePost.length + 1
            }
            statePost.push(post)
            state.textareaState = ''
            return state

        default:
           return state
    }
}

export default profileReducer;