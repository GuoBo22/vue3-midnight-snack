import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI, getStoresAPI, getCartListAPI, getShopListAPI, getSearchResultAPI} from '@/apis/home'
import { createPersistedState } from 'pinia-plugin-persistedstate'

// 首页分类
export const useCategoryStore = defineStore('category', () => {
    const categoryList = ref([])
    const getCategory = async () => {
        const res = await getCategoryAPI()
        categoryList.value = res.data
    }

    return {
        categoryList,
        getCategory
    }
})
// 商店列表测试
export const useStoresStore = defineStore('stores', () => {
    const storesList = ref([])
    const getStores = async () => {
        const res = await getStoresAPI()
        storesList.value = res.data
    }

    return {
        storesList,
        getStores
    }
})
// 购物车列表测试
export const useCartListStore = defineStore('cart-test', () => {
    const cartList = ref([])
    const getCartList = async () => {
        const res = await getCartListAPI()
        cartList.value = res.data
    }

    return {
        cartList,
        getCartList
    }
})
// 商店列表
export const useShopListStore = defineStore('shop', () => {
    const shopList = ref([])
    const shopCount = ref(0)
    const getShopList = async (id, page) => {
        const res = await getShopListAPI(id, page)
        shopList.value = res.data
        shopCount.value = shopList.value.length
    }

    return {
        shopCount,
        shopList,
        getShopList
    }
})

// 模糊搜索商店
export const useSearchStore = defineStore('search', () => {
    const searchResult = ref([])
    const shopCount = ref(0)
    const searchShop = async (keyword) => {
        const res = await getSearchResultAPI(keyword)
        searchResult.value = res.data
        shopCount.value = searchResult.value.length
    }

    return{
        shopCount,
        searchResult,
        searchShop
    }
})
