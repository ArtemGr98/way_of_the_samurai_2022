import styled from "styled-components";
import ChatListItem from "./ChatListItem/ChatListItem";
import Chat from "./Chat/Chat";
import {InputWrapper, PostsButton, Textarea} from "../../interface/InputWrapper/InputWrapper";
import {Route, Routes} from "react-router-dom";
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
        props.dispatch({type: "UPDATE-MESSAGE", messageText: text})
    }

    return (
        <MessagesWrapper>
            <ChatList>
                {props.state.chatListData.map(data => <ChatListItem
                    name={data.name} id={data.id} key={data.id} dispatch={props.dispatch} />)}
            </ChatList>
            <ChatWrapper>
                <Routes>
                    {props.state.chatData.map(data => {
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
                    <Textarea ref={input} onChange={updateMessage} value={props.state.textareaState}/>
                    <PostsButton onClick={() => props.dispatch({type: "ADD-MESSAGE"})}>
                        send
                    </PostsButton>
                </InputWrapper>
            </ChatWrapper>
        </MessagesWrapper>
    )
}

export default Messages