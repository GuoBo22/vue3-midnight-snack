import { getUserInfoAPI, userLogOutAPI } from "@/apis/user";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('user', ()=>{
    const userToken = ref('')
    // 定义管理用户数据的store
    const userInfo = ref({})
    // 定义获取接口数据的action函数
    const getUserInfo = async() =>{
        // 调用API并给userInfo赋值
        const res = await getUserInfoAPI(userToken.value)
        userInfo.value = res.data
    }
    
    // 退出函数 清除用户信息
    const clearUserInfo = async() => {
        const res = await userLogOutAPI(userToken.value)
        userToken.value = ''
        userInfo.value = {}
    }

    return{
        userToken,
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},{
    persist: true
})