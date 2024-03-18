import axios from 'axios'
import { showSuccessToast, showFailToast } from 'vant';
// showSuccessToast('成功文案');

axios.defaults.baseURL = 'http://localhost:3000/'
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 请求拦截
// axios.interceptors.request.use((config) => {
//     // 在发送请求之前做些什么
//     return config
// }, (error) => {
//     // 对请求错误做些什么
//     return Promise.reject(error)
// })

// 响应拦截
axios.interceptors.response.use((response) => {
    // 对响应数据做点什么
    if (response.status !== 200) {  // 程序错误
        showFailToast('服务器异常');
        // if(response.data.code === 401) {
        //     window.location.href = '/login'
        // }
    } else {
        if (response.data.code !== '8000') {
            showFailToast(response.data.msg);
            return Promise.reject(response)
        }
    }
    return response
})

export default axios
