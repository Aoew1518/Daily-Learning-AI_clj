import axios from './axios.js'

export function login(params) {
    // 开始向后端请求商品展示数据
    return axios.post('/user/login', params)
}

export function register(params) {
    // 开始向后端请求商品展示数据
    return axios.post('/user/register', params)
}