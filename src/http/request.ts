/**
 * ajax请求配置
 */
import axios from 'axios'
// 整理数据
import qs from 'qs';
axios.defaults.baseURL = '/api'


axios.defaults.transformRequest = function (data:any) {
    console.log(data instanceof FormData)
    if (data instanceof FormData) {
        return data
    } else {
        let Postdata = qs.stringify(data)
        return Postdata
    }



}

// 路由请求拦截
axios.interceptors.request.use(
    (config:any) => {
        // config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
        return config
    },
    error => {
        return error
    }
    )

// 路由响应拦截
axios.interceptors.response.use(
    response => {
        if (response.data.success === false) {
            return response.data
        } else {
            return response.data
        }
    },
    error => {
        return error// 返回接口返回的错误信息
    })




export default axios