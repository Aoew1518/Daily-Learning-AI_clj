import axios from "./axios.js";

export function getCart(){
    return axios.get("/shop-cart");
}

export function addCart(params){
    return axios.post('/shop-cart',params)
}
// export 需要打{}
// export default getCart 不需要打{}，他只能用一次