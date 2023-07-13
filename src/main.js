import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import 'element-plus/theme-chalk/el-loading.css'
import 'element-plus/theme-chalk/el-message.css'

const app = createApp(App)

const pinia = createPinia()
pinia.use(createPersistedState({
    auto: true,
    storage: sessionStorage,
}))
app.use(pinia)
app.use(router)

app.mount('#app')
