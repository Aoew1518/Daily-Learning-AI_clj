<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- 懒加载，页面级件加载出来之前，显示点loading -->
  <Suspense>
    <router-view></router-view>
  </Suspense>
</template>

<style scoped>
</style>
