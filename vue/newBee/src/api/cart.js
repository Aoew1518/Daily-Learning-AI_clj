import axios from "./axios.js";

export function getCart(onMounted){
    return axios.get('/shop-cart',onMounted); // get 是读取
}

export function addCart(params){
    return axios.post('/shop-cart',params) // post 是发送请求,设置数据
}

export function modifyCart(params){
    return axios.put('/shop-cart',params) // put 修改数据
}

export function deleteCartItem(params){
    return axios.delete(`/shop-cart/${params}`) // put 修改数据
}
// export 需要打{}
// export default getCart 不需要打{}，他只能用一次