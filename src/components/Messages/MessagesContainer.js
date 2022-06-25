import {
    activeChatId,
    addMessage, updateMessage
} from "../../redux/actions/actionsCreators";
import Messages from "./Messages";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        chatListData: state.messages.chatListData,
        chatData: state.messages.chatData,
        textareaState: state.messages.textareaState,
    }
}

export default compose(
    connect(mapStateToProps, {addMessage, updateMessage, activeChatId}),
    withAuthRedirect,
)(Messages)
