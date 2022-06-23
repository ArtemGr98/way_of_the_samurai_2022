import {instance} from "./instance";

const profileAPI = {
    getProfileInfo: (userId) => {
        return  instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
}

export default profileAPI