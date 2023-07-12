import request from '@/utils/httpTest'
import httpInstanceTest from '@/utils/httpTest';

// 登录
export const loginAPI = (phone, code, password) =>{
    // const data = JSON.stringify({
    //     "phone": phone,
    //     "code": code,
    //     "password": password
    // });

    return httpInstanceTest({
        headers:{
            'Content-Type': 'application/json'
        },
        url:'/user/login',
        method:'POST',
        data:{
            "phone": phone,
            "code": code,
            "password": password
        }
    })
}

// 获取验证码
export const getCodeAPI = (phone) =>{
    return httpInstanceTest({
        headers:{
            'Content-Type': 'x-www-form-urlencoded'
        },
        url:'/user/code',
        method:'POST',
        params:{
            "phone": phone
        }
    })
} 

// 获取用户信息
export const getUserInfoAPI = (token) =>{
    return httpInstanceTest({
        headers:{
            Authorization: token
        },
        url: '/user/me',
        method: 'GET'
    })
}