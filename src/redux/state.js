
let renderApp = () => {
    console.log("render")
}

export const state = {
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
                    {text: "text", id: 1, position: "start"},
                    {text: "text2", id: 2, position: "end"},
                    {text: "text3", id: 3, position: "end"},
                    {text: "text4", id: 4, position: "start"},
                ]
            },
        ],
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
    }
}

export const addPost = () => {
    const statePost = state.profile.postData
    const post = {
        text: state.profile.textareaState,
        like: 0,
        dislike: 0,
        id: statePost.length + 1
    }
    statePost.push(post)
    state.profile.textareaState = ''
    renderApp(state)
}

export const addMessage = () => {
    const stateChatMessage = state.messages.chatData[0].chatText
    const chatMessage = {
        text: state.messages.textareaState,
        id: 1,
        position: "end"
    }
    stateChatMessage.push(chatMessage)
    state.messages.textareaState = ''
    renderApp(state)
}

export const updateMessage = (messageText) => {
    state.messages.textareaState = messageText
    renderApp(state)
}

export const updatePost = (postText) => {
    state.profile.textareaState = postText
    renderApp(state)
}

export const subscribe = (observer) => {
    renderApp = observer
}
