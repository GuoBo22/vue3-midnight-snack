<script setup>
import PurchaseSteps from './components/PurchaseSteps.vue';
import router from '@/router/index'

function backClick() {
    try{
        router.push('/')
    }catch (error){
        console.log(error)
    }
}

</script>

<template>
    <div class="container">
        <el-button style="margin: 20px;" size="large" @click="backClick"><i class="iconfont icon-fanhui"></i></el-button>
        <PurchaseSteps />
    </div>
</template>

<style scoped>
.container {
    height: 100%;
    width: 100%;
}
</style>