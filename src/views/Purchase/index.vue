<script setup>
import PurchaseSteps from './components/PurchaseSteps.vue';

</script>

<template>
    <div class="container">
        <el-button style="margin: 20px;" size="large" @click="$router.push('/')"><i class="iconfont icon-fanhui"></i></el-button>
        <PurchaseSteps />
    </div>
</template>

<style scoped>
.container {
    height: 100%;
    width: 100%;
}
</style>