import { deletePost } from "../actions/actionsCreators"
import profileReducer from "./profileReducer"

const state = {
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
}

test('delete post', () => {
    const action = deletePost(1)

    const newState = profileReducer(state, action)

    expect(newState.postData.length).toBe(2)
})