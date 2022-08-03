import {instance} from "./instance";

const profileAPI = {
    getProfileInfo: async userId => {
        const response = await instance.get(`profile/${userId}`)
        return response.data
    },
    getStatus: async userId => {
        const response = await instance.get(`profile/status/${userId}`)
            return response.data
    },
    updateStatus: async status => {
        const response = await instance.put(`profile/status`, {
            status: status
        })
        return response.data
    },
    savePhoto: async photoFile => {
        const response = await instance.put('/profile/photo', {image: photoFile}, {
            headers: {
                'Content-type': 'multipart/form-data'
            }
        })
        return response.data
    },
    editProfileInfo: async profileInfo => {
        const response = await instance.put(`profile`, profileInfo)
        return response.data
    }
}

export default profileAPI