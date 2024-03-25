<template>
    <div class="hd">
      <input type="text" v-model="msg" />
      <button @click="add">添加</button>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from "vue";
  
  const msg = ref("");
  const { emit } = defineEmits(["add"]);
  
  const add = () => {
    emit("add", msg.value);
    msg.value = "";
  };
  </script>
  
  <style lang="css" scoped>
  /* 样式 */
  </style>
  