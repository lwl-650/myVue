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
// 获取url跳转
export function getGoUrl() {
    return request({
        url: '/getGoUrl',
        method: 'post',
    })
}
// 学习列表url
export function getStu() {
    return request({
        url: '/getStu',
        method: 'post',
    })
}
// 获取端口
export function prot() {
    return request({
        url: '/prot',
        method: 'post',
    })
}
// 所有videos
export function allVid() {
    return request({
        url: '/allVid',
        method: 'post',
    })
}
// 或取单个video
export function findByVid(data:any) {
    return request({
        url: '/findByVid',
        method: 'post',
        data,
    })
}
// 通过vid获取视频下面的评论
export function getByVid(data:Object) {
    return request({
        url: '/getByVid',
        method: 'post',
        data,
    })
}
// 查询回复通过评论id
export function findAllAns(data:Object) {
    return request({
        url: '/findAllAns',
        method: 'post',
        data,
    })
}
// 新增评论
export function addReply(data:Object) {
    return request({
        url: '/addReply',
        method: 'post',
        data,
    })
}
// 删除Reply
export function delReply(data:Object) {
    return request({
        url: '/delReply',
        method: 'post',
        data,
    })
}
// qq登录
export function qqlogin(data:Object) {
    return request({
        url: '/qqlogin',
        method: 'post',
        data,
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
