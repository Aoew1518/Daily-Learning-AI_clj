import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '', // 重定向
        redirect: '/home/suggest'
      },
      {
        path: 'suggest',
        component: () => import('@/views/homeChild/Suggest.vue')
      },
      {
        path: '/home/newest',
        component: () => import('@/views/homeChild/Newest.vue')
      }
    ]
  },
  {
    path: '/hot',
    component: () => import('../views/Hot.vue')
  },
  {
    path: '/class/:id/:name',
    name: 'class',
    component: () => import('../views/Class.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router