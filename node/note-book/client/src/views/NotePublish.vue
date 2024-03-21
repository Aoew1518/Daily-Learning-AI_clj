<template>
    <div class="note-publish">
        <div class="editor">
            <QuillEditor 
            theme="snow"
            placeholder="请输入内容"
            v-model="state.content"
            />
        </div>

        <div class="note-wrap">
            <div class="note-cell">
                <van-filed v-model="state.title" label="标题" placeholder="请输入标题"></van-filed>
            </div>
        </div>
    </div>
</template>

<script setup>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const state = reactive({
    content: '',
})
</script>

<style lang="less" scoped>
:deep(.ql-container .ql-snow){
    height: 200px;
}
.note-publish{
    min-height: 100vh;
    position: relative;
    .note-wrap{
        margin-top: 20px;
        .note-cell{

        }
    }
}
</style>