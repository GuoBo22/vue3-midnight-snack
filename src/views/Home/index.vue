<script setup>
import HomeBorderCard from "./components/HomeBorderCard.vue"
import { useCategoryStore, useStoresStore} from '@/stores/homepage'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()
const storesStore = useStoresStore()
onMounted(() => {
  categoryStore.getCategory()
  storesStore.getStores()
})


</script>

<template>
  <div class="container">
    <HomeBorderCard />
  </div>
</template>