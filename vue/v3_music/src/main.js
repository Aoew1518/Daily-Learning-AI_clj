import { createApp } from 'vue'
import './assets/base.css'
import './assets/theme.css'
import App from './App.vue'
import router from './router/index'

createApp(App).use(router).mount('#app')
