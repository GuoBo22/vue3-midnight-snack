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

// 通知后台用户登出
export const userLogOutAPI = (token) =>{
    return httpInstanceTest({
        headers:{
            Authorization: token
        },
        url: '/user/logout',
        method: 'POST'
    })
}

// 商品加入购物车
export const addCartAPI = (token,dishId) =>{
    return httpInstanceTest({
        headers:{
            Authorization: token
        },
        url: `/cart/add/?dishId=${dishId}`,
        method: 'GET',
    })
}

export const getCartAPI = (token) =>{
    return httpInstanceTest({
        headers:{
            Authorization: token
        },
        url: '/cart/q',
        method: 'GET',
    })
}

export const delCartAPI = (token, dishId) => {
    return httpInstanceTest({
        headers:{
            Authorization: token
        },
        url:`/cart/remove/${dishId}`,
        method: 'GET'
    })
}