import axios from 'axios'
import router from '../router/index'
const request = axios.create({
    baseURL: 'http://172.23.45.16:3000'
})
request.interceptors.request.use((config) => {
    return {
        ...config,
        headers: {
            ...config.headers,
            token: window.localStorage.getItem('token')
        }

    }
   
}, (error)=> {
    return Promise.reject(error);
});
request.interceptors.response.use((response) => {

    return response.data
}, (error)=> {
    const response = error.response
    const status = response.status
    if(status > 400) {
        switch(status) {
            case 401:
                router.push('/login')
                break;
            case 404:
                console.log("页面丢失")
                break;
            case 405:
                console.log("没有权限")
                break;
            default:
                console.log("网络不佳")
        }
    }
    return Promise.reject(error);
});
export default {
    get(url, data) {
        return request.get(url, {
            params: data
        })
    },
    post(url, data) {
        return request.post(url, data)
    }
} 