import request from '@/utils/httpTest'
import httpInstanceTest from '@/utils/httpTest';

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