<script lang="ts" setup>
import { ref } from 'vue'

const currentDate = ref(new Date())

</script>

<template>
    <!-- 替换商品详情页面 -->
    <a href="javascript;">
        <el-row class="el-container">
            <el-col v-for="(o, index) in 8" :key="o" :span="5" :offset="1" style="padding-bottom: 20px;">
                <el-card :body-style="{ padding: '0px'}">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image" />
                    <div style="padding: 14px">
                        <span>Yummy hamburger</span>
                        <div class="bottom">
                            <time class="time">{{ currentDate }}</time>
                            <el-button text class="button">Operating</el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </a>
</template>
  
  
<style scoped lang="scss">
.el-container{
    // margin-left: 10px;
    margin-right: 40px;
    // padding-top: 10px;
}
.time {
    font-size: 12px;
    color: #999;
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
</style>
  