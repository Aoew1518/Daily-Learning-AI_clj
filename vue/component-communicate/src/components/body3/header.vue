<template>
    <div class="head">
        <input type="text" v-model="message">
        <button @click="submit">确定</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: ''
        }
    },
    methods: {
        submit() {
            // 把message push到父组件的lists中
            // 如何把子组件的数据源给父组件使用？
            if (this.message) {
            this.$emit('add', this.message) // 发布add时间
            this.message = '' // 把message清空
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>