import { defineStore } from "pinia";
import { getShopInfoAPI, getShopMenuAPI } from "@/apis/shop";
import { ref } from "vue";

// 商店详情页store
export const useShopDetailStore = defineStore('detail', ()=>{
    const detailInfo = ref({})
    const detailMenu = ref({})

    const getDetailInfo = async(id) => {
        const res = getShopInfoAPI(id)
        detailInfo.value = (await res).data
    }

    const getDetailMenu = async(id) => {
        const res = getShopMenuAPI(id)
        detailMenu.value = (await res).data
    }

    return{
        detailInfo,
        detailMenu,
        getDetailInfo,
        getDetailMenu
    }
})