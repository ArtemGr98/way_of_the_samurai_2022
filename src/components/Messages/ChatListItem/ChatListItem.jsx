import {NavLink} from "react-router-dom";
import styled from "styled-components";

const ChatListLink = styled(NavLink)`
  padding: 10px;
  text-decoration: none;
  border-radius: 8px;
  &:hover {
    background: aqua;
  }
  &.active {
    background: aqua;
    color: white;
  }
`

const ChatListItem = (props) => {
    const path = "/messages/" + props.id

    const onActiveChatId = (id) => {
        props.activeChatId(id)
    }

    return (
        <ChatListLink to={path} id={props.id} onClick={() => onActiveChatId(props.id)}>
            {props.name}
        </ChatListLink>
    )
}

export default ChatListItem