// vant引入
import { createApp } from 'vue'
import {
    Button, Swipe, SwipeItem, Skeleton,
    Tabbar, TabbarItem, Icon, Form, Field, CellGroup,
    ActionBar, ActionBarIcon, ActionBarButton,
    SwipeCell, Card, Checkbox, CheckboxGroup, Stepper,
    SubmitBar
} from 'vant';
import 'vant/lib/index.css';
import store from './store/index'

import App from './App.vue'
// 字体适配
import 'lib-flexible/flexible'
import './assets/style/reset.css'
// 配置路由
import router from './router/index'
// 挂载
const app = createApp(App);
app.use(Button);
app.use(Swipe); // 轮播图
app.use(SwipeItem);
app.use(Skeleton);// 骨架屏组件
app.use(Tabbar);// 底部导航栏
app.use(TabbarItem);
app.use(Icon); // 引入图标
app.use(Form); // 表单
app.use(Field);
app.use(CellGroup);
app.use(ActionBar); // actionbar动作栏
app.use(ActionBarIcon);
app.use(ActionBarButton);
app.use(SwipeCell); // 滑动单元格
app.use(Card); // 使用商品卡片
app.use(Checkbox); // 复选框
app.use(CheckboxGroup);
app.use(Stepper); // 步进器
app.use(SubmitBar); // 提交订单栏
app.use(store); // 使用仓库
app.use(router);
app.mount('#app')
