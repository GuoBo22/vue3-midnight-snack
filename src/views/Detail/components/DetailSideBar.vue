<script setup>
import { onMounted, ref } from 'vue'
import DetailCartItemPanel from './DetailCartItemPanel.vue';
import { useCartListStore } from '@/stores/homepage'
import { useCartStore } from '@/stores/user'
import { ElMessageBox } from 'element-plus'

// 使用pinia调取cartlist
const cartListStore = useCartListStore(); // 测试用
const cartStore = useCartStore()


const drawer = ref(false)
const direction = ref('rtl')
function cancelClick() {
  drawer.value = false
}

function deleteClick(id) {
  cartStore.delCart(userStore.userToken, id)
  cartStore.getCart(userStore.userToken)
}


</script>

<template>
  <el-affix class="homeAffix" position="bottom" :offset=120>
    <el-button type="primary" size="large" @click="drawer = true" circle><i
        class="iconfont icon-gouwuche"></i></el-button>
  </el-affix>

  <el-drawer class="cartDrawer" v-model="drawer" :direction="direction" size='25%'>
    <template #header>
      <h4>购物车</h4>
    </template>
    <template #default>
      <div style="display: flex; align-items: center;" v-for="item in cartStore.cartList">
        <div style="font-size: 2em; font-weight: bold;">
          {{ item.name }}
          <div v-for="dish in item.dishes"
            style="width: auto; display: flex;justify-content: space-between;align-items: center;">
            <DetailCartItemPanel :foodName="dish.title" :foodPrice="dish.price" :imgURL="dish.image"
              :foodCount="dish.number" />
            <el-button type="primary" @click="deleteClick(dish.id)" style="width: 10px;margin: 10px;"><i
                class="iconfont icon-shanchu"></i></el-button>
          </div>
        </div>
        <!-- <el-divider /> -->
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

;
</style>