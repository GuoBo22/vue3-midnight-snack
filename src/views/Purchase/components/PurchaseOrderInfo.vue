<script setup>
import { ref, reactive, toRefs } from 'vue'
import PurchaseOrderItemPanel from './PurchaseOrderItemPanel.vue';
import { useCartListStore } from '@/stores/homepage'
import { onBeforeMount } from 'vue';
import { onMounted } from 'vue';

// 使用pinia调取cartlist
const totalPrice = ref(0)
const cartListStore = useCartListStore();
onMounted(() => {
    console.log(cartListStore.cartList)
    initPrice()
})
// 删除商品函数
function deleteClick(id) {
    let index = cartListStore.cartList.findIndex(obj => obj.id === id);
    cartListStore.cartList.splice(index, 1)
}


// 地址信息
const form = reactive({
    name: '',
    phone: '',
    address: '',
})
// 初始化总价格
function initPrice() {
    cartListStore.cartList.forEach(item => {
        totalPrice.value += item.foodPrice * item.foodCount
        console.log(totalPrice.value)
    })
}
function handleChange(){
    totalPrice.value = 0
    initPrice()
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
    <div class="orderItem" v-for="item in cartListStore.cartList" :key="item.id">
        <div style="width: 800px; margin-bottom: 5px; margin-top: 5px;">
            <el-card :body-style="{ padding: '0px' }" shadow="always">
                <div style="padding: 15px;">
                    <div style="display: flex;">
                        <img :src="item.imgURL" class="image" style="height: 70px; margin: 10px; border-radius: 10px;" />
                        <div class="cardInfo">
                            <div style="font-size: 20px;">{{ item.foodName }}</div>
                            <div class="item-price" style="color:red; font-size: 17px;">￥{{ item.foodPrice }}</div>
                        </div>
                        <div style="margin-top: 25px;margin-left: auto;">
                            <el-input-number v-model="item.foodCount" :min="1" @change="handleChange"
                                style="width: 170px; height: 40px;" />
                            <el-button type="primary" @click="deleteClick" style="width: 10px;margin: 10px;"><i
                                    class="iconfont icon-shanchu"></i></el-button>
                        </div>
                    </div>
                </div>
            </el-card>
        </div>
        <!-- <PurchaseOrderItemPanel :id="item.id" :foodName="item.foodName" :foodPrice="item.foodPrice" :imgURL="item.imgURL"
            :foodCount="item.foodCount" :total="totalPrice" @id-message="getIdMessage" @count-message="getCountMessage" /> -->
        <!-- <el-button type="primary" @click="deleteClick(item.id)" style="width: 10px;margin: 10px;"><i
                class="iconfont icon-shanchu"></i></el-button> -->
    </div>
    <el-divider />
    <div class="big">Total: ￥{{ totalPrice }}</div>
    <div class="footer">
        <el-button class="payBtn" type="primary" @click="$router.push('/pay')">去支付</el-button>
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