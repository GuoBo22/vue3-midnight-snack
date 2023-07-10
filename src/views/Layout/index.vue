<script setup>
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutStickyTop from './components/LayoutStickyTop.vue'
import HomeBorderCard from "./components/HomeBorderCard.vue"
import { useCartListStore, useCategoryStore, useShopListStore, useStoresStore} from '@/stores/homepage'
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
  <!-- <LayoutNav /> -->
  <LayoutStickyTop />
  <LayoutHeader />
  <div class="container">
    <HomeBorderCard />
  </div>
  <HomeSideBar /> 
  <LayoutFooter />
</template>
