<template>
    <!-- <div>
        <van-icon name="arrow-left" size="20" @click="goBack"></van-icon>
    </div> -->

    <van-nav-bar
        :title="title"
        left-text="返回"
        right-text="设置"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
        fixed="true"
    />

    <div class="back"></div>
    <!-- <van-action-sheet v-model:show="show" :actions="actions" @select="onSelect" /> -->
    <van-action-sheet
        v-model:show="show"
        :actions="actions"
        cancel-text="取消"
        close-on-click-action
        @select="onSelect"
        @cancel="onCancel"
    />

</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue'

defineProps({
    title: {
        type: String,
        default: '标题'
    }
})

const router = useRouter()

const onClickLeft = () => history.back();
const onClickRight = () => {
    show.value = true
}

const show = ref(false)
const actions = [
  { name: '分享' },
  { name: '删除' }
]

const onSelect = (item) => {
  console.log(item);
  show.value = false
}

</script>

<style lang="less" scoped>
// :deep(.van-icon){
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;

//     position: fixed;
//     top: 20px;
//     left: 20px;
//     z-index: 999;
// }

.back{
    position: relative;
    width: 100%;
    height: 46px;
}
</style>