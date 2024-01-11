<script setup>
  //模块化
  // import Counter from './components/Counter.vue'
  // import ToDoList from './components/ToDoList.vue'
  import Banner from './components/Banner.vue'
</script>

<template>
  <!-- 挂载Counter组件 方便复用、管理 -->
  <!-- 组件开头大写，它也是一个类 -->
  <!-- <Counter /> -->
  <!-- <ToDoList /> -->
  <h1>推荐</h1>
  <Banner :per-page="3" />
</template>


<style scoped>
*{
  margin: 0;
  padding: 0;
}
</style>