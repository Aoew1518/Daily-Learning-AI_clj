# 项目工程化
- 开发vue项目，SPA
    - 工程化视角，打地基，搭脚手架
        vue create 或者 npm init vite 不用从0开始
    - 项目的开发模板
        - npm init vite     vite 就是脚手架 开发流程也是工艺
    - vite 就是这套生产工艺流程
    - vue/js 技术栈
    - 生成了一个开发模板？项目文件包
    - npm i 安装依赖
    - npm run dev 启动项目

- 组件思想
    - template 里写的非html标签， 组件可以复用， 同事之间复用， 项目之间可以复用 <Rate />
    - components/Rate.vue
    - 父子组件通信 父组件负责管理数据, 子组件负责渲染(UI 简单)
        <Rate value=""/> props 外部传参
    - 数据有状态, 响应式, 数据改变(状态改变) 页面会自动更新(热更新)
        let score = ref(3); 状态数据 App.vue data 自有数据
        score.value = 4; //改变状态数据, 用到他的地方 进行响应式
    - 数据类型 data/props/computed 都是响应式
    - 单向数据绑定{{value}}
        动态数据绑定 :value="value"

