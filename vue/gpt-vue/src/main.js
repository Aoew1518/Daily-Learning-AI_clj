import { createApp } from 'vue'
import './assets/tailwind.css'
import App from './App.vue'
import { Router } from '@icon-park/vue-next'

createApp(App)
    .use(Router)
    .mount('#app')
