import profileImg from '../../../img/Profile/profileImg.png'
import Button from "../../../interface/Button/Button";
import {PostStyled} from "./PostStyled";

const Post = (props) => {
    return (
        <PostStyled>
            <div className="img">
                <img src={profileImg} alt="profileImg"/>
            </div>
            <div className="wrapper">
                <div className="text">
                    {props.text}
                </div>
                <div className="btn">
                    <Button name={`like: ${props.like}`} />
                    <Button name={`dislike: ${props.dislike}`} />
                </div>
            </div>
        </PostStyled>
    )
}

export default Post