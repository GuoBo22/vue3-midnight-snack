<script setup>
import HomeBorderCard from "./components/HomeBorderCard.vue"
import { useCartListStore, useCategoryStore, useStoresStore} from '@/stores/homepage'
import { onMounted } from 'vue'
import HomeSideBar from "./components/HomeSideBar.vue"
import { onBeforeRouteUpdate } from "vue-router"

const categoryStore = useCategoryStore()
const storesStore = useStoresStore()
const cartListStore = useCartListStore()
function loadData(){
  categoryStore.getCategory()
  storesStore.getStores()
  cartListStore.getCartList()
}
onMounted(() => {
  loadData()
})

onBeforeRouteUpdate(() => {
  loadData()
})

</script>

<template>
  <div class="container">
    <HomeBorderCard />
  </div>
  <HomeSideBar /> 
</template>

<style scoped>
</style>