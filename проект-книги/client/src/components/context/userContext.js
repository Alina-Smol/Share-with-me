import axios from 'axios';
// import {AuthResponse} from "../models/response/AuthResponse";

export const API_URL = "http://127.0.0.1:5000/auth"

const $api = axios.create({
    // withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use( (config) => {
    console.log(config.headers)
    config.headers = { ...config.headers };
    const user = localStorage.getItem('user')

        const result = JSON.parse(user)

    if (result!= null) {
        const login = result.login
        config.headers.Authorization = `Bearer ${login}`
    }

    console.log(config.headers)
    return config;
})

export default $api;