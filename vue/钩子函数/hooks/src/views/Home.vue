<template>
    <div>   
        <p>home page</p>
        <KeepAlive>
            <component :is="Hello" />
        </KeepAlive>
    </div>
</template>

<script setup>
import Hello from '../components/Hello.vue'
import { onMounted } from 'vue';
onMounted(()=>{
    console.log('首页中的onMounted');
})
</script>
<style lang="css" scoped>

</style>