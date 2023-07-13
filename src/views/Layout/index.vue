<script setup>
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutStickyTop from './components/LayoutStickyTop.vue'
import HomeBorderCard from "./components/HomeBorderCard.vue"
import { useCartListStore, useCategoryStore, useShopListStore, useStoresStore} from '@/stores/homepage'
import { onMounted } from 'vue'
import HomeSideBar from "./components/HomeSideBar.vue"
import { useCartStore, useUserStore } from '@/stores/user'

const categoryStore = useCategoryStore()
const storesStore = useStoresStore()
const cartListStore = useCartListStore()
const cartStore = useCartStore()
const userStore = useUserStore()
onMounted(() => {
  categoryStore.getCategory()
  storesStore.getStores()
  cartListStore.getCartList()
  cartStore.getCart(userStore.userToken)
  // cartStore.getCart(userStore.userToken)
})

</script>

<template>
  <!-- <LayoutNav /> -->
  <LayoutStickyTop />
  <LayoutHeader />
  <div class="container">
    <!-- <HomeBorderCard /> -->
    <RouterView />
  </div>
  <HomeSideBar /> 
  <LayoutFooter />
</template>
