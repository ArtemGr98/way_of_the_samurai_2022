import {instance} from "./instance";

const usersAPI = {
    getUsers: async (currentPage, countUsers) => {
        const response = await instance.get(`/users?page=${currentPage}&count=${countUsers}`)
        return response.data
    },

    followUser: async userId => {
        const response = await instance.post(`follow/${userId}`)
        return response.data
    },

    unFollowUser: async userId => {
        const response = await instance.delete(`follow/${userId}`)
        return response.data
    },
}

export default usersAPI