<script setup>

</script>

<template>
  <div>
    <el-card class="box-card" shadow="always">
      <el-steps :active="1" finish-status="success">
        <el-step title="Step 1" />
        <el-step title="Step 2" />
        <el-step title="Step 3" />
      </el-steps>
    </el-card>
  </div>
</template>

<style scoped>

.box-card {
  width: 90%;
  border-radius: 30px;
  margin: auto;
}
</style>