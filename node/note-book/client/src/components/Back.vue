<template>
    <div>
        <van-icon name="arrow-left" size="20" @click="goBack"></van-icon>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const goBack = () => {
    // history.back()
    // router.go(-1)
    router.back()
}
</script>

<style lang="less" scoped>
:deep(.van-icon){
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 999;
}
</style>