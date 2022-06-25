import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status}
                         setStatus={props.setStatus} putStatus={props.putStatus} />
            <Posts textareaState={props.textareaState} postData={props.postData} />
        </div>
    )
}

export default Profile