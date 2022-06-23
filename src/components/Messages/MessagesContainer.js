import {
    activeChatId,
    addMessage, updateMessage
} from "../../redux/actions/actionsCreators";
import Messages from "./Messages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        chatListData: state.messages.chatListData,
        chatData: state.messages.chatData,
        textareaState: state.messages.textareaState,
    }
}

const MessagesContainer = connect(mapStateToProps, {addMessage, updateMessage, activeChatId})(Messages)

export default MessagesContainer