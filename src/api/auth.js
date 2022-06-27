import {instance} from "./instance";

const authAPI = {
    authMe: () => instance.get(`auth/me`).then(response => response.data),
    login: (loginData) => {
        return  instance.post(`/auth/login`, {
            email: loginData.email,
            password: loginData.password,
            rememberMe: loginData.rememberMe
        }).then(response => response.data)
    }
}

export default authAPI