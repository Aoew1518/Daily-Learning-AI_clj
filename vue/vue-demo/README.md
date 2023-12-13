# Vue 开发工作流程

- 得到一个开发模板
    要开发企业级项目了, 不用从0开始, 直接用 vue-cli 生成一个模板, 然后在这个基础上开发
    npm init vite
    node package management
    - 基于vite 工作脚手架创建项目。
        选择 vue
        选择 js
    - 项目开发模板  start template
    - npm config set registry https://registry.npmmirror.com/
    - npm i 安装了依赖

- 工程概念
    vite 工程需要的脚手架
    devDependencies 开发阶段的依赖， 上线后不需要
    - 开发阶段
        npm run dev
        npm run build
    - 测试阶段
        npm run build
        npm run preview
    - 上线阶段
        npm run build
        npm run preview
        npm run deploy
    - npm run   script 脚本

- App.vue
    - vite 的功劳， 编译.vue 文件
        .syule -> .css
    - 三段
        <template>
        <script>
        <style>
    - src/ 开发目录
    - dist/ 上线目录，交货了


- vue 思想
    - 不再做DOM编程
        获取或重设html 动态编程不再需要操作DOM，DOM性能不好。
    - template 数据{{name}}，绑定script里的name变量
        -当他需要动态改变时， 响应式编程 ref(初始值)
        name.value = 更新值 template 所有绑定到它的地都会热更新1