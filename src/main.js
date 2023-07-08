

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import axios from 'axios'


const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
app.use(router)

app.mount('#app')
