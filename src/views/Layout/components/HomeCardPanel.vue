<script setup>
import { ref } from 'vue'
// const currentDate = ref(new Date())
import { useStoresStore } from '@/stores/homepage';
import { useShopListStore } from '@/stores/homepage';
import { onMounted } from 'vue';
// 使用pinia的数据
// 测试用storesStore
const storesStore = useStoresStore()
const shopStore = useShopListStore()
// 定义页码和商店列表
const page = ref(1)
const shopList = ref([])
// 刷新函数
function refreshShopList(page){
    shopStore.getShopList(page.value)
    shopStore.shopList.forEach(item => {
        shopList.value.push(item)
    })
}
onMounted(() => {
    refreshShopList(page)
})
const loadMore = () =>{
    page.value += 1
    refreshShopList(page)
}

</script>

<template>
    <!-- 替换商品详情页面 -->
    <a href="javascript;">
        <el-row class="el-container" v-infinite-scroll="loadMore" infinite-scroll-distance="400">
            <el-col v-for="item in shopList" :key="item.id" :span="5" :offset="1" style="padding-bottom: 20px;">
                <el-card :body-style="{ padding: '0px'}">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image" />
                    <div style="padding: 14px;">
                        <div style="display: flex; justify-content: space-between;">
                            <div style="font-weight:bolder; font-size: 16px;">{{item.name}}</div>
                            <div class="store-rate"><i class="iconfont icon-ge_xingji"></i>{{item.score}}/5.0</div>
                        </div>
                        <div class="bottom">
                            <div class="average-price"><i class="iconfont icon-jine"></i>{{item.avgPrice}}</div>
                            <div class="delivery-time"><i class="iconfont icon-peisongshijian"></i>{{item.deliveryTime}}min</div>
                            <!-- <time class="time">{{ currentDate }}</time> -->
                            <!-- <el-button text class="button">Operating</el-button> -->
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </a>
</template>
  
  
<style scoped lang="scss">
.el-container{
    margin-right: 40px;
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
.store-rate{
    margin-left: 15px;
    
}
</style>
  