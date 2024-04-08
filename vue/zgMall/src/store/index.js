import { createStore } from 'vuex'
import { getCart } from '@/api/cart.js';
// 创建一个新的 store 实例
const store = createStore({
    state() { // 全局公共的数据源 === data
        return {
            cartCount: 0
        }
    },
    mutations: { // === methods 专职修改仓库的数据源state
        setCartCouunt(state, count) {
            state.cartCount = count;
        }
    },
    actions: { // === async mehtds 调用方法 ;Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作
        async setCartCouuntAction(context) { // ctx(context)是actions自带的，代表该处全局
            const { data } =await getCart()
            // console.log(data);
            context.commit('setCartCouunt', data.length); // 必须用commit来触发
        }
    },
    getters: { // === computed

    }
})

export default store