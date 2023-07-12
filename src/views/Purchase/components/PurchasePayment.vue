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
    
    <div class="footer">
        <el-button class="payBtn" type="primary" @click="payOrder">支付</el-button>
    </div>
</template>

<style>
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