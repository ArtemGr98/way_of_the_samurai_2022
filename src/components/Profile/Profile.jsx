import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import {
    useParams,
} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from "react-router-dom";
import {setProfileInfo, setStatus} from "../../redux/profile/profile";

const Profile = () => {

    let {userId} = useParams();
    const authMe = useSelector(state => state.authMe.id)
    let isMyProfile = false

    if (!userId) {
        isMyProfile = true
        userId = authMe
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    useEffect(() => {
        if (!authMe) {
            return navigate('/login')
        }
        dispatch(setProfileInfo(userId))
        dispatch(setStatus(userId))
    }, [userId, dispatch, authMe, navigate])

    return (
        <div>
            <ProfileInfo isMyProfile={isMyProfile} />
            <Posts />
        </div>
    )
}

export default Profile