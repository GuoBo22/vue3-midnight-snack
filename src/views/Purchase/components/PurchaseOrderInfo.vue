<script setup>
import { ref, reactive, toRefs } from 'vue'
import PurchaseOrderItemPanel from './PurchaseOrderItemPanel.vue';
import { useCartListStore } from '@/stores/homepage'
import { onBeforeMount } from 'vue';

const totalPrice = ref(0)
// 使用pinia调取cartlist
const cartListStore = useCartListStore();
// 删除商品函数
function deleteClick(id) {
    let index = cartListStore.cartList.findIndex(obj => obj.id === id);
    cartListStore.cartList.splice(index, 1)
}
// 接受子页面传参 并且调用删除商品函数
const getIdMessage = (id) => {
    deleteClick(id)
}

const getCountMessage = (count) => {
    totalPrice.value = count
}

// do not use same name with ref
const form = reactive({
    name: '',
    phone: '',
    address: '',
})
onBeforeMount(() => {
    initPrice()
})
function initPrice(){
    cartListStore.cartList.forEach(item => {
        totalPrice.value += item.foodPrice * item.foodCount
        console.log(totalPrice.value)
    })
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
        <PurchaseOrderItemPanel :id="item.id" :foodName="item.foodName" :foodPrice="item.foodPrice" :imgURL="item.imgURL"
            :foodCount="item.foodCount" :total="totalPrice" @id-message="getIdMessage" @count-message="getCountMessage" />
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
.payBtn{
    margin: auto; 
    height: 50px; 
    width: 170px;
}
.big {
  font-size: 2em;
  font-weight: bold;
  text-align: center;
}
</style>