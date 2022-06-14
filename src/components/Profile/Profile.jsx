import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Posts state={props.state} addPost={props.addPost} updatePost={props.updatePost} />
        </div>
    )
}

export default Profile