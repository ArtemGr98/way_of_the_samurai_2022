import styled from "styled-components";

const ChatMessageWrapper = styled.div`
  display: flex;
  justify-content: ${props => (props.position === "start") ? "start" : "end"};
  text-align: ${props => (props.position === "start") ? "start" : "end"};
`
const ChatMessage = styled.div`
  width: 50%;
  background-color: ${props => (props.position === "start") ? "wheat" : "cyan"};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
`

const Chat = (props) => {
    return (
        <ChatMessageWrapper position={props.position} id={props.id}>
            <ChatMessage position={props.position}>
                {props.text}
            </ChatMessage>
        </ChatMessageWrapper>
    )
}

export default Chat