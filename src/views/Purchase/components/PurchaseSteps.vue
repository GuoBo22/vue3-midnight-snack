<script setup>
import {ref} from 'vue';
const active = ref(1)
</script>

<template>
  <div>
    <el-card class="box-card" shadow="always">
      <el-steps :active="active" finish-status="success" align-center>
        <el-step title="订单"/>
        <el-step title="支付"/>
        <el-step title="完成！"/>
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