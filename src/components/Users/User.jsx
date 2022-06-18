import styled from "styled-components";
import {Button} from "../../interface/Button/Button";

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

    const onToggleFollow = (userId) => {
        props.toggleFollow(userId)
    }

    return (
        <UserWrapper key={props.user.id}>
            <ImgBlock>
                <img src={props.user.ava} alt="ava"/>
                <Button onClick={() => onToggleFollow(props.user.id)}>
                    {(props.user.followed) ? "unfollow" : "follow"}
                </Button>
            </ImgBlock>
            <UserInfo>
                <UserInfoTop>
                    <div>
                        {props.user.name}
                    </div>
                    <div>
                        <div>
                            {props.user.country}
                        </div>
                        <div>
                            {props.user.city}
                        </div>
                    </div>
                </UserInfoTop>
                <div>
                    {props.user.info}
                </div>
            </UserInfo>
        </UserWrapper>
    )
}

export default User