import axios from 'axios'
import { mainStore } from '@/store'
const store = mainStore();

const $http = axios.create({
    //设置默认请求地址
    baseURL: 'http://localhost:8080',
    //设置请求超时时间
    timeout: 5000,
    //设置请求头
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
});

// 请求拦截器
$http.interceptors.request.use(config => {
    // 验证 token
    const token = store.state.token;
    if (config.headers!= undefined) config.headers.Authorization = token
    return config;
},error => {
    return Promise.reject(error);
})

//响应拦截
$http.interceptors.response.use(res => {

    // 状态码为200正常返回
    if (res.status === 200) {
        return Promise.resolve(res);
    } else {
        return Promise.reject(res);
    }
}, error => {
    return Promise.reject(error);
})

// 导出封装的axios
export default $http