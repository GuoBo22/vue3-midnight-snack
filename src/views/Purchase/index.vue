<script setup>
import PurchaseSteps from './components/PurchaseSteps.vue';
import PurchaseOrderInfo from './components/PurchaseOrderInfo.vue';
import { useCartListStore } from '@/stores/homepage';
import { onMounted } from 'vue';
import { getCartListAPI } from '@/apis/home';
const cartListStore = useCartListStore()

onMounted(() => {
    cartListStore.getCartList()
})
</script>

<template>
    <div class="container">
        <el-button style="margin: 20px;" size="large" @click="$router.push('/')"><i class="iconfont icon-fanhui"></i></el-button>
        <PurchaseSteps />
    </div>
    <div class="container">
        <PurchaseOrderInfo />
    </div>
</template>

<style scoped>
.container {
    height: 100%;
    width: 100%;
}
</style>