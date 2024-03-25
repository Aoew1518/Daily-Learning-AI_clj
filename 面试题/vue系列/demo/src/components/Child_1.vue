<template>
    <div class="bd">
      <ul>
        <li v-for="item in list" :key="item">{{ item }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, watch } from 'vue';
  
  const props = defineProps({
    message: {
      type: String,
      default: ''
    }
  });
  
  const list = ref(['html', 'css', 'javascript']);
  
  watch(() => {
    list.value.push(props.message);
  });
  </script>
  
  <style lang="css" scoped>
  /* 样式 */
  </style>
  