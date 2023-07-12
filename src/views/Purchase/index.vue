<script setup>
import { useCartListStore } from '@/stores/homepage';
import { onMounted } from 'vue';
import {ref} from 'vue';
const active = ref(0)
const cartListStore = useCartListStore()

onMounted(() => {
    cartListStore.getCartList()
})
const changeStep = (step) =>{
    active.value = step
}

</script>

<template>
    <div class="container">
        <el-button style="margin: 20px;" size="large" @click="$router.back()"><i
                class="iconfont icon-fanhui"></i></el-button>
        <!-- <PurchaseSteps /> -->
        <div>
            <el-card class="box-card" shadow="always">
                <el-steps :active="active" finish-status="success" align-center=true style="display: flex;align-items: center;">
                    <el-step title="订单" />
                    <el-step title="支付" />
                    <el-step title="完成！" />
                </el-steps>
            </el-card>
        </div>
    </div>
    <!-- <PurchaseDeliveryAddress />
    <PurchaseOrderInfo /> -->
    <RouterView @get-step="changeStep"/>
</template>

<style scoped>
.box-card {
  /* width: 70%; */
  display: block;
  align-items: center;
  width: 800px;
  border-radius: 30px;
  margin: auto;
}
</style>