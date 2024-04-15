import axios from "axios";

const http = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 5000,
});

// 请求拦截
http.interceptors.request.use((config) => {
    // const { user } = JSON.parse(localStorage.getItem("user"));
    // if (user && user.token) {
    //   config.headers.Authorization = `Bearer ${user.token}`;
    // }
    return config;
  },(err) => {
    return Promise.reject(err);
  }
);

// 响应拦截
http.interceptors.response.use((response) => {
  return response;
}, (err) => {
    return Promise.reject(err);
});

export { http };
