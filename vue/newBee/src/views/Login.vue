<template>
    <div class="login">
        <SimpleHeader title="登录" />
        <img class="logo" src="C:\Users\15187\Pictures\联想截图\赛博冷色.png" alt="">
    </div>
</template>

<script setup>
import SimpleHeader from '@/components/SimpleHeader.vue'
</script>

<style lang="less" scoped>
.login {
    .logo {
        width: 120px;
        height: 120px;
        display: block;
        margin: 80px auto 20px;
    }

    .login-body {
        padding: 0 20px;
    }

    .login {
        .link-register {
            font-size: 14px;
            margin-bottom: 20px;
            color: #1989fa;
            display: inline-block;
        }
    }

    .register {
        .link-login {
            font-size: 14px;
            margin-bottom: 20px;
            color: #1989fa;
            display: inline-block;
        }
    }

    .verify-bar-area {
        margin-top: 24px;

        .verify-left-bar {
            border-color: #1baeae;
        }

        .verify-move-block {
            background-color: #1baeae;
            color: #fff;
        }
    }

    .verify {
        >div {
            width: 100%;
        }

        display: flex;
        justify-content: center;

        .cerify-code-panel {
            margin-top: 16px;
        }

        .verify-code {
            width: 40% !important;
            float: left !important;
        }

        .verify-code-area {
            float: left !important;
            width: 54% !important;
            margin-left: 14px !important;

            .varify-input-code {
                width: 90px;
                height: 38px !important;
                border: 1px solid #e9e9e9;
                padding-left: 10px;
                font-size: 16px;
            }

            .verify-change-area {
                line-height: 44px;
            }
        }
    }
}
</style>