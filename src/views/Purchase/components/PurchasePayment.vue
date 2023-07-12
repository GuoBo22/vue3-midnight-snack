<script setup>
import { useRouter } from 'vue-router';
const emit = defineEmits(['get-step'])
function sendMsg() {
    emit('get-step', 3)
}

const router = useRouter()
function payOrder() {
    router.push('/finish')
    sendMsg()
}
</script>

<template>
    <div class="choosePayment">
        <el-card class="box-card" style="width: 800px;">
            <el-tabs type="border-card" stretch=true>
                <el-tab-pane label="微信支付">
                    <div style="display: flex; justify-content: center; align-items: center;">
                        <img src="@/assets/images/WechatPay.jpg" style="height: 420px;display: flex"/>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="支付宝">
                    <div style="display: flex; justify-content: center; align-items: center;">
                        <img src="@/assets/images/AliPay.jpg" style="height: 420px;"/>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="其他">其他支付方式</el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
    <div class="footer">
        <el-button class="payBtn" type="primary" @click="payOrder">支付</el-button>
    </div>
</template>

<style>
.choosePayment{
    width: 800px;
    align-items: center;
    margin: auto;
    padding-top: 20px;
}
.footer {
    height: 150px;
    display: flex;
    margin-top: 10px;
    padding: auto;
}

.payBtn {
    margin: auto;
    height: 50px;
    width: 170px;
}
</style>