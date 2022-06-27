import {ACTIVE_CHAT_ID, ADD_MESSAGE} from "../actions/actionType";

const initState = {
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

const messageReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            const chatArr = state.chatData
            const id = state.activeChat

            const currentChat = chatArr.find((chat) => chat.chatId === id)

            const chatMessage = {
                text: action.message,
                id: currentChat.chatText.length + 1,
                position: "end"
            }
            return {
                ...state,
                textareaState: '',
                chatData: [...state.chatData.map(chat => {
                    if (chat.chatId === id) {
                        chat.chatText.push(chatMessage)
                        console.log('push', chat)
                    }
                    return chat
                })]
            }
        }

        case ACTIVE_CHAT_ID: {
            return  {
                ...state,
                activeChat: action.id
            }
        }

        default:
            return state
    }
}

export default messageReducer