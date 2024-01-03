// 路由配置
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    // 每个路由单例
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        // menu ，header router-view -> discover Layout
        component: () => import('../views/Root.vue'),
        // redirect: '/views/discover', 
        redirect: { name: 'discover' },
        // 网站三层 嵌套路由
        children: [
            {
                path: 'discover',
                name: 'discover',
                component: () => import('../views/discover/Discover.vue'),
                meta: {
                    menu: 'discover',
                    keepAlive: true
                }
            }
        ]
    }
]

// 路由单例
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
