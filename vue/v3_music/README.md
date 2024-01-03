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

## 项目加分项或难点
    - 多级路由中meta属性一定要添加

    - tailwindcss 加快样式开发速度
    - 区别开发阶段
        dev test product
        npm i -D