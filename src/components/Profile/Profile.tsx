import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import {
    Navigate,
    useParams,
} from "react-router-dom";
import { FC } from "react";
import { useAppSelector } from "../../hook";

const Profile: FC = () => {
    let {userId} = useParams();

    const authMe = useAppSelector(state => state.authMe.authMeData.id)

    let isMyProfile = false

    if (!userId) {
        isMyProfile = true
    }

    if (!authMe) {
        return <Navigate to='/login' />
    }

    return (
        <div>
            <ProfileInfo userId={userId ? userId : authMe} isMyProfile={isMyProfile} />
            {isMyProfile && <Posts />}
        </div>
    )
}

export default Profile