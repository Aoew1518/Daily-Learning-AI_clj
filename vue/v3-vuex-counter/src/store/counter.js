// 数据要共享， store
// store 数据仓库
// 组件 小卖部的货架
// 进货
// import { defineStore } from "pinia";
// import { ref,computed } from "vue";
// // vue3 hooks 编程
// export const useCounterStore = defineStore('conter', () => {
//     const count = ref(0);
//     return {
//         count 
//     }
// })

// 数据要共享， store 
// store 数据仓库， 
// 组件  小卖铺里的货架 
// 进货
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
// vue3 hooks 编程 
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0);
    return {
        count 
    }
})
