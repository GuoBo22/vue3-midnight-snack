<script setup>
import HomeBorderCard from "./components/HomeBorderCard.vue"
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()
onMounted(() => categoryStore.getCategory())

</script>

<template>
  <div class="container">
    <HomeBorderCard />
  </div>
</template>