import {ACTIVE_CHAT_ID, ADD_MESSAGE, ADD_POST, UPDATE_MESSAGE, UPDATE_POST} from "../actions/actionType";

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
        if (action.type === UPDATE_POST) {
            this._state.profile.textareaState = action.postText
            this._subscriber(this)
        }
        else if (action.type === ADD_POST) {
            const state = this.getState()
            const statePost = state.profile.postData

            const post = {
                text: state.profile.textareaState,
                like: 0,
                dislike: 0,
                id: statePost.length + 1
            }
            statePost.push(post)
            state.profile.textareaState = ''
            this._subscriber(this)
        }
        else if (action.type === UPDATE_MESSAGE) {
            const state = this.getState()
            state.messages.textareaState = action.messageText
            this._subscriber(this)
        }
        else if (action.type === ADD_MESSAGE) {
            const state = this.getState()
            const chatArr = state.messages.chatData
            const id = state.messages.activeChat
            const currentChat = chatArr.filter((chat) => chat.chatId === id)
            console.log(currentChat)
            const chatMessage = {
                text: state.messages.textareaState,
                id: 1,
                position: "end"
            }
            currentChat[0].chatText.push(chatMessage)
            state.messages.textareaState = ''
            this._subscriber(this)
        }
        else if (action.type === ACTIVE_CHAT_ID) {
            this.getState().messages.activeChat = action.id
        }
    },
}


