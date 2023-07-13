import httpInstance from '@/utils/http'
import httpInstanceTest from '@/utils/httpTest'

export function getCategoryAPI(){
    return httpInstanceTest({
        url: '/shop-type/list',
        method: "GET",
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

export function getShopListAPI(id, page){
    return httpInstanceTest({
        url: '/shop/of/type',
        method: "GET",
        params:{
            "typeId": id, 
            "current": page
        }
    })
}