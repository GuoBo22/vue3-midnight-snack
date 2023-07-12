import { getUserInfoAPI } from "@/apis/user";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', ()=>{
    const userToken = ref('')
    // 定义管理用户数据的store
    const userInfo = ref({})
    // 定义获取接口数据的action函数
    const getUserInfo = async() =>{
        // 调用API并给userInfo赋值
        console.log(userToken)
        const res = await getUserInfoAPI(userToken.value)
        console.log(res)
        userInfo.value = res.data
    }

    return{
        userToken,
        userInfo,
        getUserInfo
    }
},{
    persist: true
})