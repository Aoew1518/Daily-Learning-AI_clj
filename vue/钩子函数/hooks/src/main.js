import { createApp } from 'vue'
import  router from './router'
import App from './App.vue'

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

createApp(App).use(router).mount('#app')
