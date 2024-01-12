import axios from "./axios.js";

export function getCart(onMounted){
    return axios.get('/shop-cart',onMounted);
}

export function addCart(params){
    return axios.post('/shop-cart',params)
}

// export 需要打{}
// export default getCart 不需要打{}，他只能用一次