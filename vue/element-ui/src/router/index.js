import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/', //根路径
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    children: [
      {
        path: '/home',
        redirect: '/home/list'
      },
      {
        path: 'list',
        component: () => import('@/views/home-child/List.vue'),
      },
      {
        path: '/home/document',
        component: () => import('@/views/home-child/Document.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
