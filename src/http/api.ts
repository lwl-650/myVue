// 权限管理API  【菜单、角色、权限】
import request from './request'
// import qs from 'qs';
// 登录
export function login(data:any) {

    console.log(data)
    return request({
        url: '/login',
        method: 'post',
        data,
    })
}
// 登录
export function ssq() {
    return request({
        url: '/getSsq',
        method: 'post',
    })
}






// 注册
export function user(data:any) {
    return request({
        url: '/add',
        method: 'post',
        data:data,
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })
}
// 上传
export function upload(data:any) {

    console.log(data)
    return request({ 
        url: '/upload',
        method: 'post',
        data:data,
        headers: { 'Content-Type': 'multipart/form-data' }

    })
}
// 获取个人信息
export function getUser(data:any) {
    return request({ 
        url: '/getUser',
        method: 'post',
        data:data,
    })
}

// 获取轮播图
export function getlun() {
    return request({ 
        url: '/getlun',
        method: 'post',
        
    })
}
