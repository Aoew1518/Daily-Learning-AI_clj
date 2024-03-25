<template>
    <Child @add="addItemToList" />
  
    <div class="bd">
      <ul>
        <li v-for="item in list" :key="item">{{ item }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import Child from "./components/Child_2.vue";
  
  const list = ref(["html", "css"]);
  
  const addItemToList = (item) => {
    list.value.push(item);
  };
  </script>
  
  <style lang="css" scoped>
  .hd input {
    width: 200px;
    padding: 10px 0;
    font-size: 20px;
  }
  
  .hd button {
    padding: 10px 20px;
    font-size: 20px;
  }
  </style>
  