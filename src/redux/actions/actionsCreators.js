import {ACTIVE_CHAT_ID, ADD_MESSAGE, ADD_POST, TOGGLE_FOLLOW, UPDATE_MESSAGE, UPDATE_POST} from "./actionType";

export const updatePostCreator = (text) => ({type: UPDATE_POST, postText: text})
export const addPostCreator = () => ({type: ADD_POST})

export const updateMessageCreator = (text) => ({type: UPDATE_MESSAGE, messageText: text})
export const addMessageCreator = () => ({type: ADD_MESSAGE})
export const activeChatIdCreator = (id) => ({type: ACTIVE_CHAT_ID, id: id})

export const toggleFollowCreator = (userId) => ({type: TOGGLE_FOLLOW, id: userId})