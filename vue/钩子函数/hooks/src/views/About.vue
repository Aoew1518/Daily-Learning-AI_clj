<template>
    <div>
        about page
        <KeepAlive>
            <component :is="Hello" />
        </KeepAlive>
    </div>
</template>

<script setup>
import Hello from '../components/Hello.vue'

// 组件内的守卫
import { onBeforeRouteUpdate,onBeforeRouteLeave } from 'vue-router'
import { onMounted } from 'vue';

onMounted(()=>{
    console.log('关于页面中的onMounted');
})

onBeforeRouteLeave((to,from,next)=>{
    // console.log(to,from)
    const flag = window.confirm('你确定要离开吗？')
    if(flag){
        next()
    }
})
</script>

<style lang="scss" scoped>

</style>