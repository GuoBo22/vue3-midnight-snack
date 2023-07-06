import axios from 'axios'

axios.create({
    baseURL:'',
    timeout: 5000
})

// axios 请求拦截器
httpInstance.interceptors.request.use(config => {
    return config
}, e => Promise.reject(e))

// axios 响应式拦截器
httpInstance.interceptors.request.use(res => res.data, e => {
    return Promise.reject(e)
})

export default httpInstance