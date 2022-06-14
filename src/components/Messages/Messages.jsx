import styled from "styled-components";
import ChatListItem from "./ChatListItem/ChatListItem";
import Chat from "./Chat/Chat";
import {InputWrapper, PostsButton, Textarea} from "../../interface/InputWrapper/InputWrapper";
import React from 'react';

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

    const input = React.createRef()

    const updateMessage = () => {
        const text = input.current.value
        props.updateMessage(text)
    }


    return (
        <MessagesWrapper>
            <ChatList>
                {props.state.chatListData.map(data => <ChatListItem
                    name={data.name} id={data.id}/>)}
            </ChatList>
            <ChatWrapper>
                {props.state.chatData[0].chatText.map(data => <Chat
                    text={data.text} id={data.id} position={data.position} />)}
                <InputWrapper>
                    <Textarea ref={input} onChange={updateMessage} value={props.state.textareaState} />
                    <PostsButton onClick={props.addMessage}>
                        send
                    </PostsButton>
                </InputWrapper>
            </ChatWrapper>
        </MessagesWrapper>
    )
}

export default Messages