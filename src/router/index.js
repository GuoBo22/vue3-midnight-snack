import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import HomeSearchResult from '@/views/Layout/components/HomeSearchResult.vue'
import Purchase from '@/views/Purchase/index.vue'
import PurchaseOrderInfoVue from '@/views/Purchase/components/PurchaseOrderInfo.vue'
import PurchasePayment from '@/views/Purchase/components/PurchasePayment.vue'
import PurchaseFinish from '@/views/Purchase/components/PurchaseFinish.vue'
import Detail from '@/views/Detail/index.vue'
import User from '@/views/User/index.vue'
import HomeBorderCardVue from '@/views/Layout/components/HomeBorderCard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children:[
        {
          path: '',
          component: HomeBorderCardVue
        },
        {
          path: '/search',
          component:HomeSearchResult,
        }
      ]
    },{
      path: '/login',
      component: Login
    },{
      path: '/purchase',
      component: Purchase,
      children: [
        {
          path: '',
          component: PurchaseOrderInfoVue,
        },
        {
          path: '/pay',
          component:PurchasePayment,
        },
        {
          path: '/finish',
          component: PurchaseFinish,
        }
      ]
    },
    {
      path: '/detail/:id',
      component: Detail,
    },
    {
      path: '/user',
      component: User
    }
  ],
  // 配置路由滚动行为
  scrollBehavior(){
    return{
      top: 0
    }
  }
})

export default router
