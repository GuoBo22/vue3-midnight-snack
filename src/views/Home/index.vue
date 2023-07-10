<script setup>
import HomeBorderCard from "./components/HomeBorderCard.vue"
import { useCartListStore, useCategoryStore, useStoresStore} from '@/stores/homepage'
import { onMounted } from 'vue'
import HomeSideBar from "./components/HomeSideBar.vue"

const categoryStore = useCategoryStore()
const storesStore = useStoresStore()
const cartListStore = useCartListStore()
onMounted(() => {
  categoryStore.getCategory()
  storesStore.getStores()
  cartListStore.getCartList()
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