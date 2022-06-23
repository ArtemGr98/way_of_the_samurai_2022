import {instance} from "./instance";

const usersAPI = {
    getUsers: (currentPage, countUsers) => {
        return  instance.get(`/users?page=${currentPage}&count=${countUsers}`)
            .then(response => response.data)
    },

    followUser: (userId) => {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },

    unFollowUser: (userId) => {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
}

export default usersAPI