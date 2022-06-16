import profileReducer from "./reducers/profileReducer";
import messageReducer from "./reducers/messageReducer";

export const store = {
    _subscriber: () => {
        console.log("no subscribers")
    },
    _state: {
        messages: {
            chatListData: [
                {name: "name1", id: 1},
                {name: "name2", id: 2},
                {name: "name3", id: 3},
                {name: "name4", id: 4},
            ],
            chatData: [
                {
                    chatId: 1,
                    chatText: [
                        {text: "text1", id: 1, position: "start"},
                        {text: "text1", id: 2, position: "end"},
                        {text: "text1", id: 3, position: "end"},
                        {text: "text1", id: 4, position: "start"},
                    ]
                },
                {
                    chatId: 2,
                    chatText: [
                        {text: "text2", id: 1, position: "start"},
                        {text: "text2", id: 2, position: "end"},
                        {text: "text2", id: 3, position: "end"},
                        {text: "text2", id: 4, position: "start"},
                    ]
                },
            ],
            activeChat: '',
            textareaState: '',
        },
        profile: {
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
        },
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._subscriber = observer
    },

    dispatch(action) {
        const state = this.getState()

        profileReducer(state.profile, action)
        messageReducer(state.messages, action)

        this._subscriber(this)
    },
}


