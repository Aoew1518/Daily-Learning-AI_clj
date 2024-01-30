import { createRouter,createWebHistory } from 'vue-router'

const routes = [{
        path:'/',
        name:'home',
        component:()=>import('../views/Home.vue'),
        meta:{
            title: '商城页面'
        }
    },
    {
        path:'/about',
        name:'about',
        component:()=>import('../views/About.vue'),
        meta:{
            title: '关于页面'
        }
        // beforeEnter:(to,from,next) =>{
        //     console.log(to,from);
        //     next()
        // }
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

// 全局的前置钩子（前置）
// router.beforeEach((to,from,next)=>{
//     document.title = to.meta.title
//     // console.log(to,from)
//     if(to.path !== '/'){
//         const isLogin = localStorage.getItem('islogin')
//         if(isLogin){
//             next()
//         }else{
//             // router.push('/login')
//             alert('请先登录')
//         }
//     }
//     next()
// })

// 全局的解析守卫（过程）
// router.beforeResolve((to,from,next)=>{
//     console.log(to,from)
// })

// 跳转后执行守卫（结果）
// router.afterEach((to,from)=>{
//     console.log(to,from)

// })
export default router