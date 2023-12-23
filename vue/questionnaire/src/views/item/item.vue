<template>
    <div>
        <ItemContainerVue parentCompoent="item"/>
    </div>
</template>

<script>
import ItemContainerVue from '@/components/ItemContainer.vue';
import { mapActions } from 'vuex';
    export default {
        components: {
            ItemContainerVue
        },
        created() { //生命周期函数，在页面加载的时候自动会触发
            this.getQuestionListAction()
        },
        methods: {
            ...mapActions(['getQuestionListAction']),//相当于定义了getQuestionListAction()
        }
    }   
</script>

<style lang="less" scoped>

</style>