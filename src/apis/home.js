import httpInstance from '@/utils/http'
import httpInstanceTest from '@/utils/httpTest'

export function getCategoryAPI(){
    return httpInstance({
        url: '/home/category/tabs',
        method: "GET",
        // 测试用参数
        params: {
            "test": true
        }
    })
}

export function getStoresAPI(){
    return httpInstance({
        url: '/home/tabs/comment-stores',
        method: "GET",
        // 测试用参数
        params: {
            "test": true
        }
    })
}

export function getCartListAPI(){
    return httpInstance({
        url: '/home/cart-list',
        method: "GET"
    })
}

export function getShopListAPI(page){
    return httpInstanceTest({
        url: '/shop/of/type',
        method: "GET",
        params:{
            "typeId": 1, 
            "current": page
        }
    })
}