<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutStickyTop from './components/LayoutStickyTop.vue'

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
  <!-- <LayoutNav /> -->
  <LayoutStickyTop />
  <LayoutHeader />
  <div class="container">
    <HomeBorderCard />
  </div>
  <HomeSideBar /> 
  <LayoutFooter />
</template>
