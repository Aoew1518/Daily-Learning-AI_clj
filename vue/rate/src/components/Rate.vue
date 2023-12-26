<script setup>
import { defineProps, computed } from 'vue';
// 父子组件信任通信
let props = defineProps({
    value: Number,
    // 对参数要求比较复杂的时候，可以定义参数的类型，以及参数的默认值
    theme: {
        type: String,
        default: "orange"
    }
})
// 计算属性，data/props 再计算一下 总价
let rate = computed(() => "★★★★★☆☆☆☆☆".slice(5 - props.value, 10 - props.value))
let fontStyle = computed(() => `color:${props.theme};`)
</script>

<template>
    <div :style="fontStyle">Rate{{ value }}{{ rate }}</div>
</template>

<style scoped></style>