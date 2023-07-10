<script setup>
import { ref, onBeforeUnmount } from 'vue'
import PurchaseOrderItemPanel from './PurchaseOrderItemPanel.vue';
import { useCartListStore } from '@/stores/homepage'


// 使用pinia调取cartlist
const cartListStore = useCartListStore();

</script>

<template>
    
    <div class="orderItem" v-for="item in cartListStore.cartList" :key="id">
        <PurchaseOrderItemPanel :foodName="item.foodName" :foodPrice="item.foodPrice" :imgURL="item.imgURL"
            :foodCount="item.foodCount" />
        <el-button type="primary" @click="deleteClick" style="width: 10px;margin: 10px;"><i
                class="iconfont icon-shanchu"></i></el-button>
    </div>
</template>

<style scoped>
.orderItem {
    display: flex;
    align-items: center;
    margin-left: 50%;
    margin-right: 50%;
}
</style>