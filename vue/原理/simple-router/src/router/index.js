// import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from './myRouter/index.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../view/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../view/About.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(), // history模式和hash模式
  routes
})

export default router