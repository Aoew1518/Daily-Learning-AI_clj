<template>
  <div>
    <button @click="counterStore.increment">{{ count }}</button>
    {{ doubleCounter }}
    
    <ul>
      <li v-for="item in counterStore.list" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script setup>
// 1. 导入 useCounterStore 方法
import { useCounterStore } from '@/stores/counter.js'
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

// 2. 执行方法得到 store 实例对象
const counterStore = useCounterStore()

console.log(counterStore)
// 打印Proxy

// 直接解构赋值(会响应式丢失)
// const { count, doubleCounter } =  counterStore
// console.log(count, doubleCounter)

// storeToRefs方法包裹(保持响应式更新)
const { count, doubleCounter } =  storeToRefs(counterStore)
console.log(count, doubleCounter)

// 方法直接从原来的counterStore中解构赋值
const { increment } =  counterStore

onMounted(()=>{
  counterStore.getlist()
})
</script>

<style lang="scss" scoped>

</style>