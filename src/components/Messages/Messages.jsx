import styled from "styled-components";
import ChatListItem from "./ChatListItem/ChatListItem";
import Chat from "./Chat/Chat";
import {Route, Routes} from "react-router-dom";
import MessageForm from "./MessageForm";
import {useSelector} from "react-redux";

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

const Messages = () => {

    const chatListData = useSelector(state => state.messages.chatListData)
    const chatData = useSelector(state => state.messages.chatData)

    return (
        <MessagesWrapper>
            <ChatList>
                {chatListData.map(data => <ChatListItem
                    name={data.name} id={data.id} key={data.id} />)}
            </ChatList>
            <ChatWrapper>
                <Routes>
                    {chatData.map(data => {
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
                <MessageForm />
            </ChatWrapper>
        </MessagesWrapper>
    )
}

export default Messages