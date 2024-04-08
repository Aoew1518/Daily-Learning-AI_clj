import axios from './axios.js'

export function getHome(){
    // 开始向后端请求商品展示数据
    return axios.get('/index-infos')
}
