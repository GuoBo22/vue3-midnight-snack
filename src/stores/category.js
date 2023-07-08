import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/home'

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
