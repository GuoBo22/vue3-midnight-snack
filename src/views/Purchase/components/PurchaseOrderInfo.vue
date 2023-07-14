<script setup>
import { ref, reactive, toRefs } from 'vue'
import { useCartListStore } from '@/stores/homepage'
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore, useUserStore } from '@/stores/user';

// 使用pinia调取cartlist
const totalPrice = ref(0)
const cartListStore = useCartListStore();
const cartStore = useCartStore()
const userStore = useUserStore()
onMounted(() => {
    initPrice()
    cartStore.getCart(userStore.userToken)
})
// 删除商品函数
function deleteClick(id) {
    cartStore.delCart(userStore.userToken, id)
    cartStore.getCart(userStore.cartList)
    totalPrice.value = 0
    initPrice()
}


// 地址信息
const form = reactive({
    name: '',
    phone: '',
    address: '',
})
// 初始化总价格
function initPrice() {
    // cartListStore.cartList.forEach(item => {
    //     item.dishes.forEach(dish =>{
    //         totalPrice.value += dish.price * dish.number
    //     })
    // })
    console.log(cartStore.cartList)
    for(var i=0; i < cartStore.cartList.length; i++){
        console.log(cartStore.cartList[i])
        for(var x=0; x < cartStore.cartList[i].dishes.length; x++){
            console.log(cartStore.cartList[i].dishes[x].price)
            totalPrice.value += cartStore.cartList[i].dishes[x].price * cartStore.cartList[i].dishes[x].number
        }
    }
}
function handleChange(id, number){
    
    totalPrice.value = 0
    initPrice()
}

const emit = defineEmits(['get-step'])
function sendMsg(){
    emit('get-step', 1)
}

const router = useRouter()
function goToPay(){
    router.push('/pay')
    sendMsg()
}

</script>

<template>
    <div style="display:flex; align-items: center; justify-content: center;">
        <el-card class="box-card">
            <el-form :model="form" label-width="100px">
                <el-form-item label="联系人">
                    <el-input v-model="form.name" />
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model="form.phone" />
                </el-form-item>
                <el-form-item label="收货地址">
                    <el-input v-model="form.address" type="textarea" />
                </el-form-item>
            </el-form>
        </el-card>
    </div>
    <div class="orderItem" v-for="item in cartStore.cartList">
        <div style="font-size: 2em;font-weight: bold;">
            {{ item.name }}
            <div v-for="dish in item.dishes" style="width: 800px; margin-bottom: 5px; margin-top: 5px;">
                <el-card :body-style="{ padding: '0px' }" shadow="always">
                    <div style="padding: 15px;">
                        <div style="display: flex;">
                            <img :src="dish.image" class="image" style="height: 70px; margin: 10px; border-radius: 10px;" />
                            <div class="cardInfo">
                                <div style="font-size: 20px;">{{ dish.title }}</div>
                                <div class="item-price" style="color:red; font-size: 17px;">￥{{ dish.price }}</div>
                            </div>
                            <div style="margin-top: 25px;margin-left: auto;">
                                <el-input-number v-model="dish.number" :min="1" @change="handleChange(dish.id, dish.number)"
                                    style="width: 170px; height: 40px;" />
                                <el-button type="primary" @click="deleteClick(dish.id)" style="width: 10px;margin: 10px;"><i
                                        class="iconfont icon-shanchu"></i></el-button>
                            </div>
                        </div>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
    <el-divider />
    <div class="big">Total: ￥{{ totalPrice }}</div>
    <div class="footer">
        <el-button class="payBtn" type="primary" @click="goToPay">去支付</el-button>
    </div>
</template>

<style scoped>
.orderItem {
    display: flex;
    align-items: center;
    justify-content: center;
}

.box-card {
    width: 800px;
    padding: auto;
    margin-top: 15px;
    margin-bottom: 15px;
}

.footer {
    height: 150px;
    display: flex;
    margin-top: 10px;
    padding: auto;
}

.payBtn {
    margin: auto;
    height: 50px;
    width: 170px;
}

.big {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
}
.cardInfo {
  display: flex;
  flex-direction: column;
  margin: 10px;
  justify-content: space-between;
  font-weight: bolder;
}
</style>