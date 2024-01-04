<template>
    <div class="home">
        <header class="home-header active">
            <router-link to="#">
                <i class="iconfont icon-menu"></i>
            </router-link>

            <div class="header-search">
                <span class="app-name">喜仔超市</span>
                <i>|</i>
                <router-link to="#" class="search-title">欢迎进店</router-link>
            </div>

            <router-link to="/login" class="login">登录</router-link>

        </header>
    </div>
</template>
  
<script setup>

</script>
  
<style lang="less" scoped>
// 固定写法引入css必须@import
@import '@/common/style/mixin.less';

.home {
    padding-bottom: 100px;

    .home-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        box-sizing: border-box; //自适应
        font-size: 15px;

        &.active {
            background-color: @primary;

            .icon-menu {
                color: #fff;
            }

            .login {
                color: #fff;
            }
        }

        .icon-menu {
            color: @primary;
        }

        .header-search {
            .wh(74%, 20px);
            padding: 5px 0;
            line-height: 20px;
            color: #232326;
            background-color: rgba(255, 255, 255, 0.7);
            border-radius: 20px;
            display: flex;
            align-items: center;

            .app-name {
                color: @primary;
                padding: 0 10px;
                font-size: 20px;
                font-weight: bold;
            }

            .search-title {
                font-size: 14px;
                padding: 0 10px;
            }
        }

        .login {
            font-size: 16px;
            color: @primary;
        }
    }

}</style>