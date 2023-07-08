<script setup>
// import { useCategoryStore } from '@/stores/category';
// // 使用pinia的数据
// const categoryStore = useCategoryStore()

</script>

<template>
  <div class="container-full-background">
    <div class="overlay"></div>
    <header class='app-header'>
      <div class="container">
        <h1 class="logo">
          <RouterLink to="/">宵品</RouterLink>
        </h1>
        <!-- <ul class="app-header-nav">
          <li class="home" v-for="item in categoryStore.categoryList" :key="item.id">
            <RouterLink to="/">{{ item.name }}</RouterLink>
          </li>
        </ul> -->

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

        <!-- 头部购物车 -->

      </div>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="Hey! Wanna eat something?">
      </div>
    </header>
  </div>
</template>


<style scoped lang='scss'>
.app-header {
  // background: #fff;
  margin-top: 20px;
  align-items: flex-start;
  width: 100%;
  // height: 600px;

  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 40px;
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

  // .app-header-nav {
  //   width: 820px;
  //   display: flex;
  //   padding-left: 40px;
  //   position: relative;
  //   z-index: 998;

  //   li {
  //     margin-right: 40px;
  //     width: 38px;
  //     text-align: center;

  //     a {
  //       font-size: 16px;
  //       line-height: 32px;
  //       height: 32px;
  //       display: inline-block;

  //       &:hover {
  //         color: $xtxColor;
  //         border-bottom: 1px solid $xtxColor;
  //       }
  //     }

  //     .active {
  //       color: $xtxColor;
  //       border-bottom: 1px solid $xtxColor;
  //     }
  //   }
  // }

  .search {
    width: 700px;
    height: 70px;
    position: relative;
    // border-bottom: 1px solid #e7e7e7;
    line-height: 70px;
    border-radius: 25px;
    background-color: #F7FAFC;
    margin: 0 auto;
    align-items: center;
    
    .icon-search {
      font-size: 40px;
      margin-left: 20px;
    }

    input {
      width: 600px;
      padding-left: 15px;
      color: #3f3f3f;
      font-size: 35px;
      background-color: #F7FAFC;

    }
  }
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
    padding-top: 40px;
    
    li {
      
      // align-items: center;
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

.container-full-background {
  /* Center the content */
  align-items: center;
  display: flex;
  flex-direction: column;
  // justify-content: center;

  /* Take full size */
  height: 600px;
  width: 100%;

  /* Background */
  background: url('@/assets/images/layout-header-background.jpg') center center / cover no-repeat;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 600px;
  background-color: rgba(0, 0, 0, 0.6);
  /* 设置遮罩颜色和透明度 */
  pointer-events: none;
  /* 确保遮罩不会阻挡下方的内容交互 */
}
</style>
