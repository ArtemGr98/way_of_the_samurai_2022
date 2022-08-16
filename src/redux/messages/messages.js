import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
}

const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        addMessage: (state, action) => {
            const chatArr = state.chatData
            const id = state.activeChat

            const currentChat = chatArr.find((chat) => chat.chatId === id)

            const chatMessage = {
                text: action.payload,
                id: currentChat.chatText.length + 1,
                position: "end"
            }
            state.textareaState = ''
            state.chatData.map(chat => {
                if (chat.chatId === id) {
                    chat.chatText.push(chatMessage)
                }
                return chat
            })
        },
        activeChatId: (state, action) => {
            state.activeChat = action.payload
        }
    }
})

export default messagesSlice.reducer
export const {addMessage, activeChatId} = messagesSlice.actions