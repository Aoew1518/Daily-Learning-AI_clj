import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/noteClass', // 设置重定向
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: { // meta 内定的附加属性
      title: '登录'
    }
  },
  {
    path: '/noteClass',
    name: 'home',
    component: () => import('@/views/NoteClass.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/Register.vue'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/noteList',
    name: 'noteList',
    component: () => import('@/views/NoteList.vue'),
    meta: {
      title: '笔记列表'
    }
  },
  {
    path: '/noteDetail',
    name: 'noteDetail',
    component: () => import('@/views/NoteDetail.vue'),
    meta: {
      title: '笔记详情'
    }
  },
  {
    path: '/notePublish',
    name: 'notePublish',
    component: () => import('@/views/NotePublish.vue'),
    meta: {
      title: '笔记发布'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 全局路由前置守卫
const whiteList = ['/login', '/register'] // 白名单
router.beforeEach((to, from, next) => {
  // console.log(to, from)
  document.title = to.meta.title // 页面会话的标题

  if (!whiteList.includes(to.path)) {
    // 看白名单中是否包含当前路径，包含则放行
    if(!localStorage.getItem('userInfo')){
        router.push('/login')
        return
    }
  }
  next()

  // 第二种写法
  // if (to.path === '/login' || to.path === '/register') {
  // if (whiteList.includes(to.path)) {
  //   next()
  // } else {
  //   const token = localStorage.getItem('userInfo')
  //   if (token) {
  //     next()
  //   } else {
  //     next('/login')
  //   }
  // }

})

export default router