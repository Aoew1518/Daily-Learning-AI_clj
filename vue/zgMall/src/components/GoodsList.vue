<template>
    <div class="goods">
        <header class="goods-header">{{ title }}</header>
        <van-skeleton title avatar :row="3" :loading="loading">
            <div class="goods-box">
                <div class="goods-item" v-for="item in list" :key="item.goodsId" @click="goGoodsDetail(item.goodsId)">
                    <img :src="item.goodsCoverImg" alt="">
                    <div class="goods-desc">
                        <div class="title">{{ item.goodsName }}</div>
                        <div class="price">￥{{ item.sellingPrice }}</div>
                    </div>
                </div>
            </div>
        </van-skeleton>
    </div>
</template>
  
<script setup>
import { ref, computed } from 'vue' // 把变量变为响应式
import { defineProps } from 'vue' // 可以不引入
import { useRouter } from 'vue-router' // 路由跳转
// list可以直接拿到div中使用，但是在script中需要使用props.list来使用
const props = defineProps({
    list: Array,
    title: String
})
// const loading = ref(true)  // 骨架屏的加载状态，真数据拿到的时候，设置为false
const router = useRouter() // 路由跳转
// computed必须要有返回值
const loading = computed(() => {
    if (props.list.length > 0) { // 要用计算属性来实时监听loading是否变化，计算属性有缓存
        return false //骨架屏的加载状态,false为无骨架屏
    }
    return true //骨架屏的加载状态,true为有骨架屏
})

// 页面跳转
const goGoodsDetail = (id) => {
    // console.log(id)
    // 将这件商品的id传递给详情页
    router.push({ path: '/product', query: { id: id } }) // path跳，query传参
}
</script>
  
<style lang="less" scoped>
@import '@/common/style/mixin.less';

.goods {
    &-header {
        background-color: #f9f9f9;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        color: @primary;
    }

    &-box {
        display: flex;
        flex-wrap: wrap;

        .goods-item {
            width: 50%;
            border-bottom: 1px solid #e9e9e9;
            box-sizing: border-box;

            img {
                width: 3.2rem;
                display: block;
                margin: 0 auto;
            }

            .goods-desc {
                text-align: center;
                font-size: 14px;
                padding: 10px 0;

                .title {
                    display: -webkit-box; // 将元素设为弹性伸缩盒子模型
                    // white-space: nowrap; // 文本不换行，单行显示
                    -webkit-box-orient: vertical; // 设置元素的排列顺序
                    -webkit-line-clamp: 2;
                    overflow: hidden; // 隐藏超出元素内容的部分
                    text-overflow: ellipsis; // 超出部分显示省略号
                    color: #222333;
                    margin-bottom: 6px;
                }

                .price {
                    color: @primary;
                }
            }

            &:nth-child(2n+1) {
                // 相当于.goods-item:nth-child()
                border-right: 1px solid #e9e9e9;
            }
        }
    }
}
</style>
