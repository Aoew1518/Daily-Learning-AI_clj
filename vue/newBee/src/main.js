// vant引入
import { createApp } from 'vue'
import { Button } from 'vant';
import 'vant/lib/index.css';

import App from './App.vue'
// 字体适配
import 'lib-flexible/flexible'
import './assets/style/reset.css'
// 配置路由
import router from './router/index'
// 挂载
const app = createApp(App);
app.use(Button);
app.use(router);

app.mount('#app')
