<template>
  <div>
    <p>{{state.count}}</p>
    <p>{{num}}</p>
    <button @click="() => state.count++">add</button>
  </div>
</template>

<script setup>
import { computed, reactive, watch, effect } from 'vue'

const state = reactive({
  count: 1,
  msg: 2,
  abc: 123
})

const num = computed(() => {
  return state.count * 10
})

watch(
  () => state.count, 
  (newVal, oldVal) => {
    console.log(newVal, oldVal);
  }
)

effect(
  () => { // 类似于生命周期，一开始就会执行
    console.log('hello world');
  }, 
  {lazy: true}
)


// const state2 = reactive(state)

</script>

<style lang="css" scoped>

</style>