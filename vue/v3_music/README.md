# 网易云音乐
- 组件思维
    - 图标组件库
    - Layout 组件
    - 业务组件
        - Menu 不用自己开发 用ElementPlus
        - Swiper
        - Mv
    
- 路由
    Menu -> Router
- 数据接口

## VUE 中大型项目开发流程

- 路由 组件思想 
    App（根组件） -> router-view（vue-router内置的组件） -> 页面级别组件（view/） -> 子组件

- 样式准备
    - reset
    - style
    - tailwindcss 原子化css
        - 安装
        npm i -D tailwindcss postcss autoprefixe 开发阶段用的库，上线的时候不用
        npx tailwindcss init -p
        npx 运行
        页面样式也和汽车组装一样，原子化 不需要写样式
        - w-1 w代表宽度 1个单位 0.25rem
        - flex flex-col flex-shrink-0 items-stretch 原子样式的 细粒度拼装

- Layout
- 页面级别组件
- 构成页面的组件

## 项目加分项或难点
    - 多级路由中meta属性一定要添加

    - tailwindcss 加快样式开发速度
        - 适配问题 w-56 w-screen rem vw
    - 区别开发阶段
        dev test product
        npm i -D
    - 单页应用，在组件化开发之前要搭好layout


## 考点
- flex 布局
    item-stretch    align-items:stretch;
    flex-shrink-0   缩 flex-shrink: 0;
    flex-1          弹 flex: 1; flex-grow: 1;flex-shrink: 1; flex-basis: 0%;
- vue 开发思想
    - 组件化思想
        - components
            - layout
            - common
        - views/ pages/
        - ElementPlus
    - 数据驱动思想
        - 数据绑定{{}}
        - :class :style :动态绑定 响应式
        - props
        - computed
        - vuex
        - api
- hash 路由 兼容性好 url 一部分
    - history 路由 兼容性不好 url 一全部
    url的hash 部分发生改变 页面不会重新刷新 页面瞄点
    缺点 和传统的路由不太一样
- vue-router js 跳转路由
    - vue-router 提供了useRouter useRouter 俩个函数
    - useRouter() 拿到路由管家对象，在这个对象上有push 方法
    {name 对应 router.name} 配置时name 属性不能少
    - useRouter() 拿到当前路由对象 meta 属性 关于这个路由的所有东西
    - 路由的切换，直接通过分享闯进来