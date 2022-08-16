import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {activeChatId} from "../../../redux/messages/messages";
import {useDispatch} from "react-redux";

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
    const dispatch = useDispatch()

    return (
        <ChatListLink to={path} id={props.id} onClick={() => dispatch(activeChatId(props.id))}>
            {props.name}
        </ChatListLink>
    )
}

export default ChatListItem