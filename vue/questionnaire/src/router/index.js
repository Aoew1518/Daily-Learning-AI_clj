import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home/home.vue')
  },
  {
    path: '/item',
    name: 'item',
    component: () => import('../views/item/item.vue')
  },
  {
    path: '/score',
    name: 'score',
    component: () => import('../views/score/score.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
