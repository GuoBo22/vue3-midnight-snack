<script setup>
import { useCartListStore } from '@/stores/homepage'
import { onMounted, ref } from 'vue';
import DetailSideBar from './components/DetailSideBar.vue'
import { useRoute, useRouter } from 'vue-router';
import { useShopDetailStore } from '@/stores/shop'
import { useUserStore, useCartStore } from '@/stores/user'
import { ElMessage } from 'element-plus'
const route = useRoute()
const router = useRouter()
const shopDetailStore = useShopDetailStore()
const cartListStore = useCartListStore()  // 测试用的store
const userStore = useUserStore()
const cartStore = useCartStore()  // 实际store
const shopId = route.params.id
onMounted(() => {
    getDetail()
    cartStore.getCart(userStore.userToken)
})

function getDetail() {
    shopDetailStore.getDetailInfo(shopId)
    shopDetailStore.getDetailMenu(shopId)
}

const addCart = (id) => {
    console.log("addCart接受到了id", id)
    // 判断用户是否登录
    if (userStore.userToken) {
        console.log("addCart用户已经登录")
        cartStore.addToCart(userStore.userToken, id)
        cartStore.getCart(userStore.userToken)
    } else {
        ElMessage.warning('请先登录')
        router.push('/login')
        // 跳转到登录页
    }
}

const refreshCart = () => {
    setTimeout(function(){
        cartStore.getCart(userStore.userToken)
    }, 300)
    console.log(cartStore.cartList)
}
</script>
<template>
    <div style="width: 100%;height: 100%;background-color: #f4f1eb;">
        <el-button style="margin: 20px;" size="large" @click="$router.back()"><i
                class="iconfont icon-fanhui"></i></el-button>
        <div class="container">
            <el-card class="infoCard" shadow="always">
                <div class="block">
                    <el-carousel height="250px" indicator-position="outside" shadow="always">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <h3 class="justify-center">
                                <el-image
                                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                                    fit="cover"></el-image>
                            </h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div class="info" style="margin-top: 10px;">
                    <div style="font-size: 3em;font-weight: bold;">
                        {{ shopDetailStore.detailInfo.name }}
                    </div>
                    <div style="color: #555555; line-height: 25px; letter-spacing: 3px;">
                        <div>
                            <i class="iconfont icon-dizhiguanli"></i>{{ shopDetailStore.detailInfo.address }}
                        </div>
                        <div>
                            <i class="iconfont icon-price"></i>{{ shopDetailStore.detailInfo.avgPrice }}
                        </div>
                        <div>
                            <i class="iconfont icon-yishouchu"></i>{{ shopDetailStore.detailInfo.sold }}
                        </div>
                        <div>
                            <i class="iconfont icon-pingfen"></i>{{ shopDetailStore.detailInfo.score }}
                        </div>
                        <div>
                            <i class="iconfont icon-shijian"></i>{{ shopDetailStore.detailInfo.openHours }}
                        </div>
                    </div>
                </div>
            </el-card>
            <el-card class="foodCard" shadow="always">
                <div class="orderItem" v-for="item in shopDetailStore.detailMenu" :key="item.id">
                    <div style="width: 800px; margin-bottom: 5px; margin-top: 5px;">
                        <el-card :body-style="{ padding: '0px' }" shadow="always">
                            <div style="padding: 15px;">
                                <div style="display: flex;">
                                    <img :src="item.image" class="image"
                                        style="height: 70px; margin: 10px; border-radius: 10px;" />
                                    <div class="cardInfo">
                                        <div style="font-size: 20px;">{{ item.title }}</div>
                                        <div style="color: #777777; font-size: smaller;"><i>{{ item.description }}</i></div>
                                        <div class="item-price" style="color:red; font-size: 17px;">￥{{ item.price }}</div>
                                    </div>
                                    <div style="margin-top: 25px;margin-left: auto;">
                                        <el-button type="primary" style="margin-right: 25px;"
                                            @click="addCart(item.id)">加入购物车</el-button>
                                    </div>
                                </div>
                            </div>
                        </el-card>
                    </div>
                </div>
            </el-card>
        </div>
        <div @click="refreshCart">
            <DetailSideBar />
        </div>
    </div>
</template>
    
<style scoped>
.container {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
}

.block {
    width: 800px;
}

.infoCard {
    border-radius: 20px;
    width: 1100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.foodCard {
    border-radius: 20px;
    width: 1100px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
}


.demonstration {
    color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
    line-height: 150px;
    margin: 0;
    text-align: center;
}

.cardInfo {
    display: flex;
    flex-direction: column;
    margin: 10px;
    justify-content: space-between;
    font-weight: bolder;
}
</style>
    