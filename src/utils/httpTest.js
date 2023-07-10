import axios from 'axios'

const httpInstanceTest = axios.create({
    baseURL:'http://43.143.214.16:8081',
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