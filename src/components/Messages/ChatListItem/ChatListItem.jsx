import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {activeChatIdCreator} from "../../../actions/actionCreator";

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

    const activeChatId = (id) => {
        const action = activeChatIdCreator(id)
        props.dispatch(action)
    }


    return (
        <ChatListLink to={path} id={props.id} onClick={() => activeChatId(props.id)}>
            {props.name}
        </ChatListLink>
    )
}

export default ChatListItem