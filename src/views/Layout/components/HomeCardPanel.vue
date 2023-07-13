<script setup>
import { ref,watch,defineProps } from 'vue'
import { useStoresStore } from '@/stores/homepage';
import { useShopListStore } from '@/stores/homepage';
import { useCategoryStore} from '@/stores/homepage'
import { onMounted } from 'vue';
import { computed } from 'vue';
const props = defineProps(['id']);
// 使用pinia的数据
// 测试用storesStore
const storesStore = useStoresStore()
// 正常接口
const shopStore = useShopListStore()
const categoryStore = useCategoryStore()
// 定义页码和商店列表
const page = ref(1)
const shopList = ref([])
// 监听typeId变化
watch(props,(newValue, oldValue) =>{
    categoryStore.getCategory()
    page.value = 1
    refreshShopList(categoryStore.categoryList[props.id].id, 1)
})
// 切换页面的时候刷新函数
function refreshShopList(typeId, page) {
    shopStore.getShopList(typeId, page)
    setTimeout(() =>{
        shopList.value = shopStore.shopList
    }, 200)
}

onMounted(() => {
    page.value = 1
    refreshShopList(categoryStore.categoryList[props.id].id, page.value)
})

const loading = ref(false)
const count = ref(0)
// 判断是否满20个
const notFull = computed(() => (shopStore.shopCount % 20) != 0)
// 两个条件都满足才行
const disabled = computed(() => loading.value || notFull.value)
const loadMore = function(){
    loading.value = true
    page.value += 1
    shopStore.getShopList(categoryStore.categoryList[props.id].id, page.value)
    setTimeout(() => {
        shopStore.shopList.forEach(item =>{
            shopList.value.push(item)
        })
        loading.value = false
    }, 500)
}

</script>

<template>
    <div>
        <el-row class="el-container" v-infinite-scroll="loadMore" :infinite-scroll-disabled="disabled">
            <!-- 修改主页商品列表 -->
            <el-col v-for="item in shopList" :key="item.id" :span="5" :offset="1" style="padding-bottom: 20px;">
                <RouterLink :to="`/detail/${item.id}`">
                    <el-card :body-style="{ padding: '0px' }">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            class="image" />
                        <div style="padding: 14px;">
                            <div style="display: flex; justify-content: space-between;">
                                <div style="font-weight:bolder; font-size: 16px;">{{ item.name }}</div>
                                <div class="store-rate"><i class="iconfont icon-ge_xingji"></i>{{ item.score }}/5.0</div>
                            </div>
                            <div class="bottom">
                                <div class="average-price"><i class="iconfont icon-jine"></i>{{ item.avgPrice }}</div>
                                <div class="delivery-time"><i
                                        class="iconfont icon-peisongshijian"></i>{{ item.deliveryTime }}min</div>
                                <!-- <time class="time">{{ currentDate }}</time> -->
                                <!-- <el-button text class="button">Operating</el-button> -->
                            </div>
                        </div>
                    </el-card>
                </RouterLink>
            </el-col>
            <i class="iconfont icon-loading" v-if="loading" style="margin: auto;padding-top: 10px;">Loading...</i>
        </el-row>
        <!-- <ul v-infinite-scroll="loadMore" :infinite-scroll-disabled="disabled">
        </ul> -->
        <!-- <p v-if="loading">Loading...</p> -->
    </div>
</template>
  
  
<style scoped lang="scss">
.el-container {
    margin-right: 40px;
    align-items: center;
    // margin: 0 auto;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    padding: 0;
    min-height: auto;
}

.image {
    width: 100%;
    display: block;
}

.store-rate {
    margin-left: 15px;

}
</style>
  