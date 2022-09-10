import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import {
    Navigate,
    useParams,
} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import {setProfileInfo, setStatus} from "../../redux/profile/profile";
import Login from "../Login/Login";

const Profile = () => {

    let {userId} = useParams();
    const authMe = useSelector(state => state.authMe.authMeData.id)
    let isMyProfile = false

    if (!userId) {
        isMyProfile = true
        userId = authMe
    }

    // const navigate = useNavigate()
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     if (!authMe) {
    //         return navigate('/login')
    //     }
    //     dispatch(setProfileInfo(userId))
    //     dispatch(setStatus(userId))
    // }, [userId, dispatch, authMe, navigate])

    if (!authMe) {
        return <Navigate to='/login' />
    }

    return (
        <div>
            <ProfileInfo userId={userId} isMyProfile={isMyProfile} />
            {isMyProfile && <Posts />}
        </div>
    )
}

export default Profile