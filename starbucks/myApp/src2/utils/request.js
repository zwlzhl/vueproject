import axios from 'axios';
import router from '../router';

const request = axios.create();

request.interceptors.request.use((config)=>{
    return {
        ...config,
        headers:{
            ...config.headers,
            token:window.localStorage.getItem('token')
        }
    }
},(error)=>{
    return Promise.reject(error);
})

//响应之前拦截
request.interceptors.response.use((respose)=>{
    // console.log(respose)
    return respose.data
},(error)=>{
    const response=error.response;
    const status=response.status;
    // console.log(status)
    if(status > 400){
        console.log(status)
        switch(status){
            case 401:
                router.push('/Login');
            break;
            case 404:
                console.log('页面丢失');
            break;
            case 405:
                console.log('没有权限');
            break;
            default:
                console.log('网络出现错误')
        }
    }
    return Promise.reject(error)
})

export default {
    get(url,data){
        console.log(url);
        return request.get(url,{
            params:data
        });
    },
    post(url,data){
        return request.post(url,data);
    }
}