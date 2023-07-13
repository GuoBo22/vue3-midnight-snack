import httpInstance from '@/utils/http'
import httpInstanceTest from '@/utils/httpTest'

// 主页分类
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

// 获取商铺列表 id=分类 page=页面
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

// 主页模糊搜索
export function getSearchResultAPI(keyword){
    return httpInstanceTest({
        url: `/shop/q/like/${keyword}`,
        method: 'GET',
    })
}