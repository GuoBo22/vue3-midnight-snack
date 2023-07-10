import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI, getStoresAPI, getCartListAPI} from '@/apis/home'

export const useCategoryStore = defineStore('category', () => {
    // 导航列表的数据管理
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

export const useStoresStore = defineStore('stores', () => {
    // 导航列表的数据管理
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

export const useCartListStore = defineStore('cart', () => {
    // 导航列表的数据管理
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
