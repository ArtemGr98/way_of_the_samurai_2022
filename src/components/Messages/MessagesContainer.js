import {activeChatIdCreator, addMessageCreator, updateMessageCreator} from "../../redux/actions/actionsCreators";
import Messages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        chatListData: state.messages.chatListData,
        chatData: state.messages.chatData,
        textareaState: state.messages.textareaState,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageCreator())
        },
        updateMessage: (text) => {
            dispatch(updateMessageCreator(text))
        },
        activeChatId: (id) => {
            dispatch(activeChatIdCreator(id))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer