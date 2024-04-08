<template>
    <div class="login">
        <SimpleHeader :title="state.type === 'login' ? '登录' : '注册'" />
        <img class="logo" src="C:\Users\15187\Pictures\联想截图\saibo.png" alt="">

        <div class="login-body login" v-if="state.type === 'login'">
            <van-form @submit="onSubmit">

                <van-field v-model="state.username" name="用户名" label="用户名" placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]" />

                <van-field v-model="state.password" type="password" name="密码" label="密码" placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]" />

                <van-field v-model="state.verify" name="验证码" label="验证码" placeholder="验证码"
                    :rules="[{ required: true, message: '请填写验证码' }]">
                    <template #button>
                        <ImageVerify ref="verifyRef" />
                    </template>
                </van-field>

                <div style="margin: 16px;">
                    <div class="link-register" @click="toggle('register')">立即注册</div>
                    <van-button round block type="primary" native-type="submit">
                        登录
                    </van-button>
                </div>
            </van-form>
        </div>

        <div class="login-body register" v-else>
            <van-form @submit="onSubmit">

                <van-field v-model="state.username" name="用户名" label="用户名" placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]" />

                <van-field v-model="state.password" type="password" name="密码" label="密码" placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]" />

                <van-field v-model="state.verify" name="验证码" label="验证码" placeholder="验证码"
                    :rules="[{ required: true, message: '请填写验证码' }]">
                    <template #button>
                        <ImageVerify ref="verifyRef" />
                    </template>
                </van-field>

                <div style="margin: 16px;">
                    <div class="link-login" @click="toggle('login')">已有账号登录</div>
                    <van-button round block type="success" native-type="submit">
                        注册
                    </van-button>
                </div>
            </van-form>
        </div>

    </div>
</template>

<script setup>
import SimpleHeader from '@/components/SimpleHeader.vue'
import { reactive, ref, onMounted } from 'vue';
import { showToast } from 'vant';
import { login, register } from '../api/user.js';
import md5 from 'md5';
import ImageVerify from '@/components/ImageVerify.vue'
// 引入验证码组件,verifyRef就是子组件的dom结构
const verifyRef = ref(null)

onMounted(() => {
    console.log(verifyRef.value.verifyCode.code);
})

const state = reactive({
    username: '',
    password: '',
    verify: '',
    type: 'login'
})

const onSubmit = async () => {
    // console.log(state.username, state.password, state.verify);
    if (state.verify !== verifyRef.value.verifyCode.code) {
        showToast('验证码错误')
        return
    }
    if (state.type === 'login') { // 登录
        // 发请求
        const { data } = await login({
            'loginName': state.username,
            'passwordMd5': md5(state.password)
        })
        console.log(data);
        localStorage.setItem('token', data)
        window.location.href = '/'  // 跳页面浏览器会刷新

    } else { // 注册
        // register 成功后跳转登录页面

        const { data } = await register({
            'loginName': state.username,
            'passwordMd5': md5(state.password)
        })
        console.log(data);
        window.location.href = '/'  // 注册成功后跳转登录页面

    }
}

const toggle = (type) => { // 切换登录和注册俩种模式
    state.type = type
}
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
<style>
.van-cell.van-field {
    align-items: center;
}
</style>