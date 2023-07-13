<script setup>
import { reactive } from 'vue'
import { ref, onMounted, computed } from 'vue';
import { loginAPI,getCodeAPI } from '@/apis/user';
import { ElMessage } from 'element-plus';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user'
// do not use same name with ref
const form = reactive({
  phone: '',
  code: '',
  pwd: '',
})
const userStore = useUserStore()
const router = useRouter()
const countdown = ref(120);
const disableButton = ref(false);

const buttonText = computed(() => {
  if (disableButton.value) {
    return `${countdown.value}秒后重试`;
  } else {
    return '获取验证码';
  }
});

const getVerificationCode = () => {
  // 处理获取验证码逻辑
  // 在此处可以添加发送请求的代码，获取验证码
  const phone = form.phone
  getCodeAPI(phone).then(res =>{
    ElMessage(res.msg)
  })
  // 禁用按钮，并开始倒计时
  disableButton.value = true;
  startCountdown();
};

// 倒计时函数
const startCountdown = () => {
  if (countdown.value > 0) {
    setTimeout(() => {
      countdown.value--;
      startCountdown();
    }, 1000);
  } else {
    // 倒计时结束，重新启用按钮
    disableButton.value = false;
    countdown.value = 60; // 重置倒计时时间
  }
};

onMounted(() => {
  // 在组件挂载后执行的逻辑
});

// 登录方法切换
const loginType = ref('密码登录')
const toggleLoginType = () => {
  if (loginType.value === '验证码登录') {
    loginType.value = '密码登录';
  } else {
    loginType.value = '验证码登录';
  }
};

// 登录函数
const doLogin = () => {
  // const {phone, code, pwd} = form.value
  const phone = form.phone
  const code = form.code
  const pwd = form.pwd
  loginAPI(phone,code,pwd).then(res => {
    
    userStore.userToken = res.data
    userStore.getUserInfo()
    if(userStore.userToken){
      ElMessage.success('登录成功！')
      router.replace({path: '/'})
    }else{
      ElMessage.error('不对哦')
    }
  })
}

</script>

<template>
  <div class="waveWrapper waveAnimation">
    <div class="waveWrapperInner bgTop">
      <div class="wave waveTop" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')"></div>
    </div>
    <div class="waveWrapperInner bgMiddle">
      <div class="wave waveMiddle" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')">
      </div>
    </div>
    <div class="waveWrapperInner bgBottom">
      <div class="wave waveBottom" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')">
      </div>
    </div>
  </div>
  <div class="container">
    <el-button style="margin: 20px;" size="large" @click="$router.push('/')"><i class="iconfont icon-fanhui"></i></el-button>
    <div style="display:flex; align-items: center; justify-content: center; ">
      <el-card class="box-card" style="width:500px; margin-top: 200px; border-radius: 20px;" shadow="always">
        <div style="font-size: 2em; font-weight: bold; text-align: center; margin: 10px">登录</div>
        <el-form :model="form" label-width="100px" style="padding-right: 50px;">
          <el-form-item label="手机号">
            <el-input v-model="form.phone" />
          </el-form-item>
          <el-form-item label="验证码" v-if="loginType === '密码登录'">
            <el-input v-model="form.code" style="width: 200px; margin-right: 20px;" />
            <el-button type="info" style="width: 70px; font-size: 10px;" :disabled="disableButton"
              @click="getVerificationCode">{{ buttonText }}</el-button>
          </el-form-item>
          <el-form-item label="密码" v-else="loginType === '验证码登录'">
            <el-input v-model="form.pwd" type="password" show-password/>
          </el-form-item>
          <!-- <el-button @click="toggleLoginType" size="small" style="margin-left: 100px; padding: 0px;" bg>{{ loginType }}</el-button> -->
        </el-form>
        <div class="btnContainer">
          <div style="font-size: smaller;color: #555555;">
            *未注册的手机号码验证后自动成为用户*<el-button @click="toggleLoginType" size="small"
              style="margin-left: 20px; padding: 0px;background-color: #fff;" text>{{ loginType }}</el-button>
          </div>
          <el-button type="primary" class="btn" @click="doLogin">登录</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>
<style scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.btnContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.box-card {
  width: 350px;
}

.btn {
  margin: 5px;
  width: 350px;
  padding: auto;
}

@keyframes move_wave {
  0% {
    transform: translateX(0) translateZ(0) scaleY(1)
  }

  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.55)
  }

  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1)
  }
}

.waveWrapper {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  z-index: -9999px;
}

.waveWrapperInner {
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 100%;
  bottom: -1px;
  background-image: linear-gradient(to top, #86377b 20%, #27273c 80%);
}

.bgTop {
  z-index: 15;
  opacity: 0.5;
}

.bgMiddle {
  z-index: 10;
  opacity: 0.75;
}

.bgBottom {
  z-index: 5;
}

.wave {
  position: absolute;
  left: 0;
  width: 200%;
  height: 100%;
  background-repeat: repeat no-repeat;
  background-position: 0 bottom;
  transform-origin: center bottom;
}

.waveTop {
  background-size: 50% 100px;
}

.waveAnimation .waveTop {
  animation: move-wave 3s;
  -webkit-animation: move-wave 3s;
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
}

.waveMiddle {
  background-size: 50% 120px;
}

.waveAnimation .waveMiddle {
  animation: move_wave 10s linear infinite;
}

.waveBottom {
  background-size: 50% 100px;
}

.waveAnimation .waveBottom {
  animation: move_wave 15s linear infinite;
}
.logo {
    width: 200px;

    a {
      display: flex;
      height: 100px;
      width: 200px;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
    }
  }
</style>
