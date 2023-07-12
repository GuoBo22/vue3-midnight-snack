<script setup>
import { ref, onBeforeUnmount } from 'vue'
import HomeCartItemPanel from './HomeCartItemPanel.vue';
import { useCartListStore } from '@/stores/homepage'
import { ElMessageBox } from 'element-plus'

// 使用pinia调取cartlist
const cartListStore = useCartListStore();

const drawer = ref(false)
const direction = ref('rtl')
function cancelClick() {
  drawer.value = false
}

function deleteClick(id) {
    let index = cartListStore.cartList.findIndex(obj => obj.id === id);
    cartListStore.cartList.splice(index, 1)
}


</script>

<template>
  <el-affix class="homeAffix" position="bottom" :offset=120>
    <el-button type="primary" size="large" @click="drawer = true" circle><i
        class="iconfont icon-gouwuche"></i></el-button>
  </el-affix>

  <el-drawer class="cartDrawer" v-model="drawer" :direction="direction" size='20%'>
    <template #header>
      <h4>购物车</h4>
    </template>
    <template #default>
      <div style="display: flex; align-items: center;" v-for="item in cartListStore.cartList" :key="id">
        <HomeCartItemPanel :foodName="item.foodName" :foodPrice="item.foodPrice" :imgURL="item.imgURL" :foodCount="item.foodCount" />
        <el-button type="primary" @click="deleteClick(item.id)" style="width: 10px;margin: 10px;"><i
            class="iconfont icon-shanchu"></i></el-button>
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="cancelClick">cancel</el-button>
        <el-button type="primary" @click="$router.push('/purchase')">立即下单</el-button>
      </div>
    </template>
  </el-drawer>
</template>

<style scoped>
.homeAffix {
  text-align: right;
  margin-right: 100px;
  margin-bottom: 50px;
}

;</style>