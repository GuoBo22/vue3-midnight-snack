<script setup>
import { useScroll } from '@vueuse/core'
// import { useCategoryStore } from '@/stores/category';
// 测y位置
const { y } = useScroll(window)
// // 使用pinia的数据
// const categoryStore = useCategoryStore()
</script>

<template>
  <div class="app-header-sticky" :class="{ show: y > 400 }">
    <div class="container-full-background">
      <div class="overlay"></div>
      <div class="container">
        <RouterLink class="logo" to="/" />
        <!-- 导航区域 -->
        <div class="search">
          <i class="iconfont icon-search"></i>
          <input type="text" placeholder="Hey! Wanna eat something?">
        </div>

        <nav class="app-topnav">
          <div class="container-nav">
            <ul>
              <template v-if="true">
                <li><a href="javascript:;"><i class="iconfont icon-user"></i>周杰伦</a></li>
                <li>
                  <el-popconfirm title="确认退出吗?" confirm-button-text="确认" cancel-button-text="取消">
                    <template #reference>
                      <a href="javascript:;">退出登录</a>
                    </template>
                  </el-popconfirm>
                </li>
                <li><a href="javascript:;">我的订单</a></li>
                <li><a href="javascript:;">会员中心</a></li>
              </template>
              <template v-else>
                <li><a href="javascript:;">请先登录</a></li>
                <li><a href="javascript:;">帮助中心</a></li>
                <li><a href="javascript:;">关于我们</a></li>
              </template>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>


<style scoped lang='scss'>
.app-header-sticky {
  width: 100%;
  height: 100px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 此处为关键样式!!!
  // 状态一：往上平移自身高度 + 完全透明
  transform: translateY(-100%);
  opacity: 0;

  // 状态二：移除平移 + 完全不透明
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .container {
    display: flex;
    align-items: center;

  }

  .logo {
    margin-top: 20px;
    width: 180px;
    height: 60px;
    background: url("@/assets/images/logo.png") no-repeat right 2px;
    background-size: 180px auto;

  }

  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $xtxColor;

    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;

      &:hover {
        color: $xtxColor;
      }
    }
  }
}

.search {
    width: 500px;
    height: 50px;
    position: relative;
    // border-bottom: 1px solid #e7e7e7;
    line-height: 50px;
    border-radius: 25px;
    background-color: #F7FAFC;
    margin: 0 auto;
    align-items: center;
    margin-top: 20px;
    
    .icon-search {
      font-size: 30px;
      margin-left: 20px;
    }

    input {
      width: 400px;
      padding-left: 15px;
      color: #3f3f3f;
      font-size: 25px;
      background-color: #F7FAFC;

    }
  }


.container-full-background {
  /* Center the content */
  align-items: center;
  display: flex;
  flex-direction: column;
  // justify-content: center;

  /* Take full size */
  height: 100px;
  width: 100%;

  /* Background */
  background: url('@/assets/images/layout-sticky-top-background.jpg') center center / cover no-repeat;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.6);
  /* 设置遮罩颜色和透明度 */
  pointer-events: none;
  /* 确保遮罩不会阻挡下方的内容交互 */
}

.app-topnav {
  // background: #ffffff;
  margin-left: 80px;
  
  ul {
    display: flex;
    height: 50px;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    padding-top: 20px;
    
    li {
      
      align-items: center;
      .icon-user {
        font-size: 14px;
        margin-right: 5px;
        
      }

      a {
        padding: 0 15px;
        color: #ffffff;
        line-height: 1;
        display: inline-block;

        i {
          font-size: 20px;
          margin-right: 2px;
        }

        &:hover {
          color: $xtxColor;
        }
      }

      ~li {
        a {
          border-left: 2px solid #cdcdcd;
        }
      }
    }
  }
}
</style>
@/stores/homepage