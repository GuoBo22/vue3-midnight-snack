<script setup>
import { useCategoryStore } from '@/stores/category';
// 使用pinia的数据
const categoryStore = useCategoryStore()

</script>

<template>
    <div class="container">
        <el-tabs :stretch="true" class="tabCards">
            <el-tab-pane v-for="item in categoryStore.categoryList" :key="item.id">
                <template #label>
                    <span class="homeTabCards">
                        <!-- <el-icon><calendar /></el-icon> -->
                        <span>{{ item.name }}</span>
                    </span>
                </template>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<style scoped lang="scss">
.container {
    align-items: center;
    margin: auto;
    padding-top: 30px;

    .tabCards {
        padding-bottom: 10pxs;
    }

    .homeTabCards span {
        vertical-align: middle;
        margin-left: 4px;
        font-size: 30px;
    }
}
</style>