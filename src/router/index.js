import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Purchase from '@/views/Purchase/index.vue'
import PurchaseOrderInfoVue from '@/views/Purchase/components/PurchaseOrderInfo.vue'
import PurchasePayment from '@/views/Purchase/components/PurchasePayment.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout
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
        }
      ]
    }
  ]
})

export default router
