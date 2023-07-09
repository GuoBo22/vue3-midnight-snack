<script setup>
import HomeCardPanel from './HomeCardPanel.vue'
import { useCategoryStore } from '@/stores/homepage';
// 使用pinia的数据
const categoryStore = useCategoryStore()

</script>

<template>
    <div class="container">
        <el-tabs :stretch=true class="tabCards" v-infinite-scroll="load">
            <el-tab-pane v-for="item in categoryStore.categoryList" :key="item.id">
                <template #label>
                    <span class="homeTabCards">
                        <!-- <el-icon><calendar /></el-icon> -->
                        <span>{{ item.name }}</span>
                    </span>
                </template>
                <HomeCardPanel />
                <!-- <HomeCardPanel storeName="麦当劳"></HomeCardPanel> -->
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<style scoped lang="scss">
.container {
    width: 100%;
    display: block;
    margin: 0 auto;
    padding-top: 30px;
    .tabCards {
        padding-bottom: 10px;
    }

    .homeTabCards span {
        vertical-align: middle;
        margin-left: 4px;
        font-size: 30px;
    }
}
</style>@/stores/homepage