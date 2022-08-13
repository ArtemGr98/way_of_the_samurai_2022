import styled from "styled-components";
import {Button} from "../../interface/Button/Button";
import userPhoto from "../../img/Profile/profileImg.png"
import {NavLink} from "react-router-dom";
import { onToggleFollow } from "../../redux/users/users";
import { useDispatch, useSelector } from "react-redux";

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

const User = ({user}) => {
    const isDisabled = useSelector(state => state.users.isDisabled)
    const dispatch = useDispatch()

    return (
        <UserWrapper key={user.id}>
            <ImgBlock>
                <NavLink to={`/profile/${user.id}`}>
                    <img
                        src={(user.photos.small) ? user.photos.small : userPhoto}
                        alt="ava"/>
                </NavLink>
                <Button disabled={isDisabled.id.includes(user.id)}
                        onClick={() => dispatch(onToggleFollow(user.id, user.followed))}>
                    {(user.followed) ? "unfollow" : "follow"}
                </Button>
            </ImgBlock>
            <UserInfo>
                <UserInfoTop>
                    <div>
                        {user.name}
                    </div>
                </UserInfoTop>
                <div>
                    {user.status}
                </div>
            </UserInfo>
        </UserWrapper>
    )
}

export default User