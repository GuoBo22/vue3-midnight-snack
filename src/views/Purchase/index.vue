<script setup>
import PurchaseSteps from './components/PurchaseSteps.vue';
import { useCartListStore } from '@/stores/homepage';
import { onMounted } from 'vue';
const cartListStore = useCartListStore()

onMounted(() => {
    cartListStore.getCartList()
})


</script>

<template>
    <div>
        <div class="container">
            <el-button style="margin: 20px;" size="large" @click="$router.push('/')"><i
                    class="iconfont icon-fanhui"></i></el-button>
            <PurchaseSteps />
        </div>
        <!-- <PurchaseDeliveryAddress />
        <PurchaseOrderInfo /> -->
        <RouterView />
    </div>
</template>

<style scoped>

</style>