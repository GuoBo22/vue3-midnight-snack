import { defineStore } from "pinia";
import { getShopInfoAPI, getShopMenuAPI } from "@/apis/shop";
import { ref } from "vue";

export const useShopDetailStore = defineStore('detail', ()=>{
    const detailInfo = ref({})
    const detailMenu = ref({})

    const getDetailInfo = async(id) => {
        const res = getShopInfoAPI(id)
        console.log("getShopInfoAPI return:",res)
        detailInfo.value = (await res).data
    }

    const getDetailMenu = async(id) => {
        const res = getShopMenuAPI(id)
        console.log("getShopMenuAPI return:",res)
        detailMenu.value = (await res).data
    }

    return{
        detailInfo,
        detailMenu,
        getDetailInfo,
        getDetailMenu
    }
})