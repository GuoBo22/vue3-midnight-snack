import { getUserInfoAPI, userLogOutAPI, addCartAPI, getCartAPI, delCartAPI } from "@/apis/user";
import { defineStore } from "pinia";
import { ref } from "vue";

// 用户store
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

// 购物车store
export const useCartStore = defineStore('cartList', ()=>{
    const cartList = ref([])
    const addToCart = async(token, dishId) => {
        await addCartAPI(token, dishId)
    }

    const getCart = async(token) => {
        console.log(token)
        const res = await getCartAPI(token)
        cartList.value = res.data
    }

    const delCart = async(token, dishId) => {
        await delCartAPI(token, dishId)
        getCart(token)
    }

    return{
        cartList,
        addToCart,
        getCart,
        delCart
    }
},{
    persist: true
})