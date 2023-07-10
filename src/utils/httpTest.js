import axios from 'axios'

const httpInstanceTest = axios.create({
    baseURL:'http://localhost:8080/api',
    timeout: 5000
})

// axios 请求拦截器
httpInstanceTest.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))

// axios 响应式拦截器
httpInstanceTest.interceptors.response.use(res => res.data, e => {
    return Promise.reject(e)
})

export default httpInstanceTest