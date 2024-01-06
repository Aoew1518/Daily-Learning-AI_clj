import { createRouter,createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'; // 一开始就加载
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
        // component: () => import('../views/Home.vue')
    },
    {
        path: '/category',
        name: 'category',
        component: () => import('@/views/Cartgory.vue') // 按需引入，懒加载，来到该页面才会加载该页面
    },
    {
        path: '/cart',
        name: 'cart',
        component: () => import('@/views/Cart.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('@/views/User.vue')
    },
    {
        path: '/product',
        name: 'product',
        component: () => import('../views/ProductDetail.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
// 抛出路由router
export default router