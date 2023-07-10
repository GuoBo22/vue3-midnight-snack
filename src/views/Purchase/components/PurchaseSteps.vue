<script setup>
import {ref} from 'vue';
const active = ref(1)
function setActiveStep(num){
  active.value = num
}
</script>

<template>
  <div>
    <el-card class="box-card" shadow="always">
      <el-steps :active="active" finish-status="success">
        <el-step title="订单" @click="setActiveStep(1)"/>
        <el-step title="支付" @click="setActiveStep(2)"/>
        <el-step title="完成！" @click="setActiveStep(3)"/>
      </el-steps>
    </el-card>
  </div>
</template>

<style scoped>

.box-card {
  width: 70%;
  border-radius: 30px;
  margin: auto;
}
</style>