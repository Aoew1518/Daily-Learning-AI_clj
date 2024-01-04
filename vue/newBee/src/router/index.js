import { createRouter,createWebHistory } from "vue-router";
import Home from '@/views/Home.vue';
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
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router