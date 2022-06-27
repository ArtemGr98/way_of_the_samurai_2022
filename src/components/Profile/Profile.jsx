import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status}
                         setStatus={props.setStatus} updateStatus={props.updateStatus}/>
            <Posts postData={props.postData} addPost={props.addPost} />
        </div>
    )
}

export default Profile