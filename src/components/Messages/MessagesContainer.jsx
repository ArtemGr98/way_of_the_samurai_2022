import {activeChatIdCreator, addMessageCreator, updateMessageCreator} from "../../redux/actions/actionsCreators";
import Messages from "./Messages";

const MessagesContainer = (props) => {

    const store = props.store

    const addMessage = () => {
        const action = addMessageCreator()
        store.dispatch(action)
    }

    const updateMessage = (text) => {
        const action = updateMessageCreator(text);
        store.dispatch(action)
    }

    const activeChatId = (id) => {
        const action = activeChatIdCreator(id)
        store.dispatch(action)
    }

    return <Messages state={store.getState().messages}
                     addMessage={addMessage}
                     updateMessage={updateMessage}
                     activeChatId={activeChatId} />
}

export default MessagesContainer