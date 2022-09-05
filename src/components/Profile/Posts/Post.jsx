import profileImg from '../../../img/Profile/profileImg.png'
import { Button} from "../../../interface/Button/Button";
import styled from "styled-components";
import {useRemovePostMutation} from "../../../redux/profile/profileQueryApi";

const PostWrapper = styled.div`
  display: flex;
`
const PostAva = styled.div`
  width: 50px;
  height: 50px;
  img {
    width: 100%;
    height: 100%;
  }
`
const PostTextWrapper = styled.div`
  padding-left: 10px;
`
const PostText = styled.div`
  margin-bottom: 10px;
`
const PostButton = styled(Button)`
  margin-right: 10px;
`

const Post = ({id, ...props}) => {
    const [removePost] = useRemovePostMutation()

    return (
        <PostWrapper>
            <PostAva>
                <img src={profileImg} alt="profileImg"/>
            </PostAva>
            <PostTextWrapper>
                <PostText>
                    {props.text}
                </PostText>
                <div>
                    <PostButton>
                        like: {props.like}
                    </PostButton>
                    <PostButton>
                        dislike: {props.dislike}
                    </PostButton>
                    <button onClick={() => removePost(id)}>x</button>
                </div>
            </PostTextWrapper>
        </PostWrapper>
    )
}

export default Post