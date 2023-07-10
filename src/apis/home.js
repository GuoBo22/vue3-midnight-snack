import httpInstance from '@/utils/http'
import httpInstanceTest from '@/utils/httpTest'

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

export function getStoresAPI(){
    return httpInstance({
        url: '/home/tabs/comment-stores',
        method: "get",
        // 测试用参数
        params: {
            "test": true
        }
    })
}

export function getCartListAPI(){
    return httpInstance({
        url: '/home/cart-list',
        method: "get"
    })
}

export function getShopListAPI(page){
    return httpInstanceTest({
        url: '/shop/of/type',
        method: "get",
        params:{
            "typeId": 1, 
            "current": page
        }
    })
}