<script setup>
import HomeCardPanel from './HomeCardPanel.vue';
import { useCategoryStore } from '@/stores/homepage'
// import { ElTabs, ElTabPane } from 'element-plus';
import { ref } from "vue";
// 使用pinia的数据
const categoryStore = useCategoryStore();

// const activeTab = ref(0);

// tabs组件点击切换，tab参数从0开始，逐渐递增
// function handleTabChange(tab) {
//     console.log(tab)
//     activeTab.value = tab
// }
</script>

<template>
    <div class="container">
        <el-tabs :stretch=true class="tabCards" @tab-change="handleTabChange">
            <el-tab-pane v-for="item in categoryStore.categoryList" :key="item.id">
                <template #label>
                    <span class="homeTabCards-span">
                        <!-- <el-icon><calendar /></el-icon> -->
                        <span>{{ item.name }}</span>
                    </span>
                </template>
                <!-- <HomeCardPanel :message="activeTab" /> -->
                <HomeCardPanel />
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
</style>