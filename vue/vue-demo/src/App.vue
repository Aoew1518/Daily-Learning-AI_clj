<script setup>
import { ref } from 'vue'
// 数据绑定 - > 响应式
let name = ref("胡zhing梁")
let count = ref(0)
setTimeout(() => {
    name.value = "冷少",
    count.value++
}, 1000);

const addCount = () => {
  count.value++
}

const todos = ref([])
;(async function(){
  const list = await fetch("https://ztj8kh.laf.run/get-list")
  const { data }= await list.json()
  todos.value = data
})()
</script>

<template>
  <div>
    点击了{{count}}次
    <button type="button" @click="addCount">+1</button>
    <span class="sm">{{name}}</span>帅的一批
    <div v-if="todos.length ==0">没有todos</div>
    <ul v-else>
      <li v-for="todo in todos">{{todo.txt}}</li>
    </ul>
  </div> 
</template>

<style scoped>
.sm{
  font-size: 20px;
  font-weight: bold;
  color: red;
}
</style>