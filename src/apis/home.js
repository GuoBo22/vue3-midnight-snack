import httpInstance from '@/utils/http'

export function getCategoryAPI(){
    return httpInstance({
        url: '/home/category/tabs',
        method: "get",
        // 测试用参数
        params: {
            "test": true
        }
    })
}