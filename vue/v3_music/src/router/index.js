// 路由配置
// #/movie /movie 前端路由的两种形式 # hash / hisotry  
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
// 路由单例
const router = createRouter({
    history: createWebHistory(), // 二选一 
    // 路由数组
    routes: [
        // 每个路由对象 
        {
            path: '/',
            name: 'home',
            // menu , header  router-view -> discover Layout 
            component: () => import ('../views/Root.vue'),
            redirect: { name: 'discover'}, // 301 /discover
            // 网站三层 嵌套路由 
            children: [
                {
                    path: 'discover',
                    name: 'discover',
                    component: () => import('../views/discover/Discover.vue'),
                    // 路由对象 添加属性 meta 媒体信息
                    meta: {
                        menu: 'discover', // menu  
                        keepAlive: true
                    }
                },
                {
                    path: 'music',
                    name: 'music',
                    component: () => import('../views/music/Music.vue'),
                    // 路由对象 添加属性 meta 媒体信息
                    meta: {
                        menu: 'music', // menu  
                        keepAlive: true
                    }
                }
            ]
        }
    ]
})

export default router;