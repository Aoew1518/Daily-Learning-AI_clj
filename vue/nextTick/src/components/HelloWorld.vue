<template>
  <div>
    <p ref="refp">消息：{{message}}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('初始消息')

const refp = ref(null)

setTimeout(()=>{
  console.log(refp.value)
},1000)
</script>

<style lang="css" scoped>

</style>