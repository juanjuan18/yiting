import axios from 'axios'

//创建axios对象

const service = axios.create({//设置全局配置 H5 fetch xmlhttprequset 
    baseURL:'http://127.0.0.1:8880', //请求根路径
    timeout: 10000 // 请求超时时间
})

// 添加一个请求拦截器 每次发请求的时候，都会执行的函数。比如：为每一个请求添加一个请求头信息 sessionId
axios.interceptors.request.use(function (config) {
    config.headers['Token'] = "haha，这是测试" //获取token
    return config;
 }, function (error) {
   // Do something with request error
   return Promise.reject(error);
 });

// 添加一个响应拦截器，当后台访问特定的状态码，前端需要做出相应。

axios.interceptors.response.use(function (response) {
   // Do something with response data
   return response;
 }, function (error) {
   // Do something with response error
   return Promise.reject(error);
 });

 export default service

