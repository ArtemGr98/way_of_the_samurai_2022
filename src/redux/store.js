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
        if (action.type === "ADD-POST") {
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
        else if (action.type === "UPDATE-POST") {
            this._state.profile.textareaState = action.postText
            this._subscriber(this)
        }
        else if (action.type === "ADD-MESSAGE") {
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
        else if (action.type === "UPDATE-MESSAGE") {
            const state = this.getState()
            state.messages.textareaState = action.messageText
            this._subscriber(this)
        }
        else if (action.type === "ACTIVE-CHAT-ID") {
            this.getState().messages.activeChat = action.id
        }

    },
}


