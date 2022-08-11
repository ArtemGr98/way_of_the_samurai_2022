import styled from "styled-components";
import {Button} from "../../interface/Button/Button";
import userPhoto from "../../img/Profile/profileImg.png"
import {NavLink} from "react-router-dom";
import { onToggleFollow } from "../../redux/users/users";
import { useSelector } from "react-redux";

const UserWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`
const ImgBlock = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 200px;
    height: 200px;
  }
`
const UserInfo = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const UserInfoTop = styled.div`
  display: flex;
  justify-content: space-between;
`

const User = (props) => {

    const isDisabled = useSelector(state => state.users.isDisabled)

    return (
        <UserWrapper key={props.user.id}>
            <ImgBlock>
                <NavLink to={`/profile/${props.user.id}`}>
                    <img
                        src={(props.user.photos.small) ? props.user.photos.small : userPhoto}
                        alt="ava"/>
                </NavLink>
                <Button disabled={isDisabled.id.includes(props.user.id)}
                        onClick={() => onToggleFollow(props.user.id, props.user.followed)}>
                    {(props.user.followed) ? "unfollow" : "follow"}
                </Button>
            </ImgBlock>
            <UserInfo>
                <UserInfoTop>
                    <div>
                        {props.user.name}
                    </div>
                </UserInfoTop>
                <div>
                    {props.user.status}
                </div>
            </UserInfo>
        </UserWrapper>
    )
}

export default User