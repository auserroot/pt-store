/* 1. 引入axios */
import axios from "axios";
let BASE_URL = "http://rap2api.taobao.org/app/mock/278826/";
/* 1. 配置公共url */
let instance = axios.create({
  baseURL: BASE_URL,
});
/* 
2. 配置拦截器
vue => 导航守卫 => 路由变化
axios => 拦截器概念 => 请求前和请求后处理
*/
instance.interceptors.request.use(
  function (config) {
    /* 
      todo   1. 添加请求头，token
    */
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default instance;
