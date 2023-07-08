<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutStickyTop from './components/LayoutStickyTop.vue'

import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()
onMounted(() => categoryStore.getCategory())

</script>

<template>
  <!-- <LayoutNav /> -->
  <LayoutStickyTop />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>
