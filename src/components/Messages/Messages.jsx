import styled from "styled-components";
import ChatListItem from "./ChatListItem/ChatListItem";
import Chat from "./Chat/Chat";
import {Route, Routes} from "react-router-dom";
import MessageForm from "./MessageForm";

const MessagesWrapper = styled.div`
  display: flex;
`
const ChatList = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
`

const ChatWrapper = styled.div`
  width: 70%;
  padding: 20px;
`

const Messages = (props) => {

    const onSubmitMessageForm = (values, {setSubmitting}) => {
        props.addMessage(values.message)
        setSubmitting(false);
    }

    return (
        <MessagesWrapper>
            <ChatList>
                {props.chatListData.map(data => <ChatListItem
                    name={data.name} id={data.id} key={data.id} activeChatId={props.activeChatId} />)}
            </ChatList>
            <ChatWrapper>
                <Routes>
                    {props.chatData.map(data => {
                        return (
                            <Route path={`/${data.chatId}`}
                                   key={data.chatId}
                                   element={ data.chatText.map(data => {
                                       return (
                                           <Chat text={data.text}
                                                 id={data.id}
                                                 position={data.position}
                                                 key={data.id}/>
                                       )
                                   })} />
                            )
                        }
                    )}
                </Routes>
                <MessageForm onSubmitForm={onSubmitMessageForm} />
            </ChatWrapper>
        </MessagesWrapper>
    )
}

export default Messages