<template>
    <div class="create-order">
        <SimpleHeader title="生产订单" />
        <!-- 地址 -->
        <div class="address-wrap">
            <div class="name">
                <span>张三</span>
                <span>12334332</span>
            </div>
            <div class="address">
                江西省抚州市临川区东华理工大学
            </div>
            <van-icon name="arrow" class="arrow" />
        </div>
        <!-- 订单列表 -->
        <div class="goods-list">
            <van-card 
                num="2" 
                price="2.00" 
                title="商品标题"
                thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg" 
                v-for="item in 4"
            />
        </div>
        <!-- 支付 -->
        <div class="pay-wrap">
            <div class="price">
                <span>商品金额</span>
                <span>￥312312</span>
            </div>
            <van-button type="primary" block>主要按钮</van-button>
        </div>
    </div>
</template>

<script setup>
import SimpleHeader from '../components/SimpleHeader.vue';
import { useRoute } from 'vue-router'
import { getCartItemIds } from '@/api/cart.js'
import { onMounted } from 'vue'

const route = useRoute()

// console.log(route.query.cartItemIds);

onMounted(async() => {
    const _cartItemIds = JSON.parse(route.query.cartItemIds)
    // console.log(_cartItemIds); // 输出；数组 [78326, 78327, 78329]
    // console.log(_cartItemIds.join(',')); // 输出：字符串 78326,78327,78329

    const { data } = await getCartItemIds({cartItemIds: _cartItemIds.join(',')})
    console.log(data);
})

</script>

<style lang="less" scoped>
.create-order {
    background: #f9f9f9;

    .address-wrap {
        background: #fff;
        margin-bottom: 20px;
        font-size: 14px;
        padding: 15px;
        position: relative;

        // border-bottom: 2px dotted #000;
        .name {
            margin: 10px 0;
        }

        .arrow {
            // float: right;
            // margin-top: -30px;
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 20px;
        }

        &::after {
            content: '';
            width: 100%;
            height: 2px;
            display: block;
            background: repeating-linear-gradient(-45deg, #ff6c6c 0%, #ff6c6c 20%, transparent 0%, transparent 25%, #1989fa 0%, #1989fa 45%, transparent 0%, transparent 50%, );
            position: absolute;
            bottom: 0;
            left: 0;
            background-size: 80px;
        }
    }
    .goods-list{
        margin-bottom: 120px;
    }
    .pay-wrap{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
        padding: 10px 20px;
        box-sizing: border-box;
        border-top: 1px solid #e9e9e9;
        .price{
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            margin: 10px 0;
            span:nth-child(2){
                color: red;
                font-size: 18px;
            }
        }
    }
}
</style>
<style>
.goods-list .van-card{
    background: #fff;
}
</style>