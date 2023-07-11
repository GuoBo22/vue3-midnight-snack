<script setup>
import {onMounted, ref} from 'vue'
const props = defineProps({
    id: Number,
    foodName: String,
    foodPrice: Number,
    imgURL: String,
    foodCount: Number,
    total: Number
})
const num = ref(1)
var countChange = 0
onMounted(() => {
  num.value = props.foodCount
})
// 向父页面传参
const emit = defineEmits(['id-message', 'count-message'])
const deleteClick = () => {
  emit('id-message', props.id)
}
const handleChange = () => {
  countChange = props.total + (num.value-props.foodCount) * props.foodPrice
  emit('count-message', countChange)
}

</script>

<template>
  <div style="width: 800px; margin-bottom: 5px; margin-top: 5px;">
    <el-card :body-style="{ padding: '0px' }" shadow="always">
      <div style="padding: 15px;">
        <div style="display: flex;">
          <img :src="props.imgURL" class="image" style="height: 70px; margin: 10px; border-radius: 10px;" />
          <div class="cardInfo">
            <div style="font-size: 20px;">{{foodName}}</div>
            <div class="item-price" style="color:red; font-size: 17px;">￥{{foodPrice}}</div>
          </div>
          <div style="margin-top: 25px;margin-left: auto;">
            <el-input-number v-model="num" :min="1" @change="handleChange" style="width: 170px; height: 40px;"/>
            <el-button type="primary" @click="deleteClick" style="width: 10px;margin: 10px;"><i
                  class="iconfont icon-shanchu"></i></el-button>
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
