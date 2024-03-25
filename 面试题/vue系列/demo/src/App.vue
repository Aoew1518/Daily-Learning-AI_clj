<template>
  <div class="hd">
    <input type="text" placeholder="请输入内容" v-model="msg">
    <button @click="add">添加</button>
  </div>

  <Child_1 :message="message"></Child_1>
</template>

<script setup>
import { ref } from 'vue';
import Child_1 from './components/Child_1.vue';

const msg = ref('');
const message = ref('');

const add = () => {
  message.value = msg.value;
};
</script>

<style lang="css" scoped>
/* 样式 */
</style>
