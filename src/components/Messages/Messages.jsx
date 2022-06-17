import styled from "styled-components";
import ChatListItem from "./ChatListItem/ChatListItem";
import Chat from "./Chat/Chat";
import {InputWrapper, PostsButton, Textarea} from "../../interface/InputWrapper/InputWrapper";
import {Route, Routes} from "react-router-dom";

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

    const onAddMessage = () => {
        props.addMessage()
    }

    const onUpdateMessage = (e) => {
        const text = e.target.value
        props.updateMessage(text)
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

                <InputWrapper>
                    <Textarea onChange={onUpdateMessage} value={props.textareaState}/>
                    <PostsButton onClick={onAddMessage}>
                        send
                    </PostsButton>
                </InputWrapper>
            </ChatWrapper>
        </MessagesWrapper>
    )
}

export default Messages