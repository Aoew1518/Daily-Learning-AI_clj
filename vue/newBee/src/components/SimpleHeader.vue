<template>
    <div class="simple-header">
        <van-icon name="arrow-left" v-if="true" @click="goBack"/>
        <i v-else>&nbsp;</i>
        <div class="simple-header-name">{{title}}</div>
        <van-icon name="ellipsis" />
    </div>
    <div class="block"></div>
</template>

<script setup>
import {defineProps} from 'vue'
import {useRouter} from 'vue-router'
const props = defineProps({
    title: String
})

const router = useRouter()

// 返回函数，返回上一级,具体含义为栈结构，-1表示返回上一级，出栈
const goBack = () => {
    // 通过 history 对象可以访问浏览器的历史记录并进行操作。go(-1) 表示向后移动一步，即返回上一页
    // history.go(-1)
    router.go(-1)
}
</script>

<style lang="less" scoped>
.simple-header{
    display: flex;
    font-size: 18px;
    height: 44px;
    // flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    border-bottom: 1px solid #ebedf0;
    position: fixed; // 固定在顶部
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    z-index: 999;
}
.block{
    height: 44px;
}
</style>