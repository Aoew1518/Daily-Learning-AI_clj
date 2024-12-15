import axios from './axios.js'
// export 抛出 getDetail() 函数
export function getDetail(id){
    // 用前端得到的id向后端请求商品详情
    return axios.get(`/goods/detail/${id}`)
}
