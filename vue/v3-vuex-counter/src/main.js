import { createApp } from 'vue'
import App from './App.vue'
// 全家桶 启用一下
import { createPinia } from 'pinia'

createApp(App)
    .use(createPinia()) // 全局启用状态管理
    .mount('#app')
    
