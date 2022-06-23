import {instance} from "./instance";

const authAPI = {
    authMe: () => instance.get(`auth/me`).then(response => response.data)
}

export default authAPI