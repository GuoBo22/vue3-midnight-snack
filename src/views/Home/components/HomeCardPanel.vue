<script setup>
// import { ref } from 'vue'
// const currentDate = ref(new Date())
import { useStoresStore } from '@/stores/homepage';
// 使用pinia的数据
const storesStore = useStoresStore()

</script>

<template>
    <!-- 替换商品详情页面 -->
    <a href="javascript;">
        <el-row class="el-container">
            <el-col v-for="item in storesStore.storesList" :key="item.id" :span="5" :offset="1" style="padding-bottom: 20px;">
                <el-card :body-style="{ padding: '0px'}">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image" />
                    <div style="padding: 14px;">
                        <div style="display: flex; justify-content: space-between;">
                            <div style="font-weight:bolder; font-size: 16px;">{{item.storeName}}</div>
                            <div class="store-rate"><i class="iconfont icon-ge_xingji"></i>{{item.storeRate}}/5.0</div>
                        </div>
                        <div class="bottom">
                            <div class="average-price"><i class="iconfont icon-jine"></i>{{item.averagePrice}}</div>
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
  