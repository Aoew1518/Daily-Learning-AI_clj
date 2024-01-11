import { createApp } from 'vue'
import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
    state() { // 全局公共的数据源 === data
        return {

        }
    },
    mutations: { // === methods

    },
    actions: { // === async mehtds ;Action 提交的是 mutation，而不是直接变更状态。Action 可以包含任意异步操作

    },
    getters: { // === computed

    }
})

export default store