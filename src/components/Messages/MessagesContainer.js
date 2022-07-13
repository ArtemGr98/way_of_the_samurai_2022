import Messages from "./Messages";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {activeChatId, addMessage} from "../../redux/messages/messages";

const mapStateToProps = (state) => {
    return {
        chatListData: state.messages.chatListData,
        chatData: state.messages.chatData,
    }
}

export default compose(
    connect(mapStateToProps, {addMessage, activeChatId}),
    withAuthRedirect,
)(Messages)
