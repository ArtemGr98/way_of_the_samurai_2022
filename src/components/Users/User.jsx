import styled from "styled-components";
import {Button} from "../../interface/Button/Button";
import userPhoto from "../../img/Profile/profileImg.png"
import {NavLink} from "react-router-dom";
import usersAPI from "../../api/users";

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

    const onToggleFollow = (userId, followed) => {
        if (!followed) {
            usersAPI.followUser(userId)
                .then(data => {(data.resultCode === 0) && props.toggleFollow(userId)})
        } else {
            usersAPI.unFollowUser(userId)
                .then(data => {(data.resultCode === 0) && props.toggleFollow(userId)})
        }
    }

    return (
        <UserWrapper key={props.user.id}>
            <ImgBlock>
                <NavLink to={`/profile/${props.user.id}`}>
                    <img
                        src={(props.user.photos.small) ? props.user.photos.small : userPhoto}
                        alt="ava"/>
                </NavLink>
                <Button onClick={() => onToggleFollow(props.user.id, props.user.followed)}>
                    {(props.user.followed) ? "unfollow" : "follow"}
                </Button>
            </ImgBlock>
            <UserInfo>
                <UserInfoTop>
                    <div>
                        {props.user.name}
                    </div>
                    {/*<div>*/}
                    {/*    <div>*/}
                    {/*        {props.user.country}*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        {props.user.city}*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </UserInfoTop>
                <div>
                    {props.user.status}
                </div>
            </UserInfo>
        </UserWrapper>
    )
}

export default User