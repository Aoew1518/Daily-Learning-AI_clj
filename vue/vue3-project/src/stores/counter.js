// stores/counter.js
// 导入一个方法 defineStore
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import axios from 'axios'

// 抛出方法
export const useCounterStore = defineStore('counter',() => {
    // 定义数据 （state）
    const count = ref(0)
    const API_URL = 'http://geek.itheima.net/v1_0/channels'
    // state定义修改数据方法 （action 同步+异步）
    const increment = () => {
        count.value++
    }

    // getter定义
    const doubleCounter = computed(() => {
        return count.value * 2
    })

    // action定义异步方法
    const list = ref([])
    const getlist = async () => {
        const res = await axios.get(API_URL)
        list.value = res.data.data.channels
    }

    // 以对象的方式return提供数组使用
    return { 
        count,
        increment,
        doubleCounter,
        list,
        getlist}
})