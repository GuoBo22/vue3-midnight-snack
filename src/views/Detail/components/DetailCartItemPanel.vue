<script setup>
import {onMounted, ref} from 'vue'
const props = defineProps({
    foodName: String,
    foodPrice: Number,
    imgURL: String,
    foodCount: Number,
})
const num = ref(1)
onMounted(() => {
    num.value = props.foodCount
})

</script>

<template>
  <div style="width: 300px; margin-bottom: 5px; margin-top: 5px;">
    <el-card :body-style="{ padding: '0px' }" shadow="always">
      <div style="padding: 15px;">
        <div style="display: flex;justify-content: space-between;">
          <img :src="props.imgURL" class="image" style="height: 70px; margin: 10px; border-radius: 10px;" />
          <div class="cardInfo">
            <div style="font-size: 16px;">{{foodName}}</div>
            <div class="item-price" style="color:red;">￥{{foodPrice}}</div>
            <el-input-number size="small" v-model="num" :min="1" @change="handleChange" style="width: 100px"/>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.cardInfo {
  display: flex;
  flex-direction: column;
  margin: 10px;
  justify-content: space-between;
  font-weight: bolder;
}
</style>
