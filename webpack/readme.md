# vite 之前的前端工程化脚手架

- 把项目跑起来
    vue 项目， .vue 组件 css(style) image...
    静态资源 大打包一下，可执行

- 打包
    - 将src 目录下的资源打包到 index.html 里面运行
    - vite/webpack 现代MVVM开发工艺 基于命令行的后端实现
    webpack node
    vite node + go + rust

- vite webpack 比较
    - webpack 配置比较复杂 entry(入口) output(输出) plugins(插件)
        webpack 学习成本高 配置复杂
        vite 相对简单
    - vite script type="module" 引入main.js入口文件，利用es6 Module
        利用es6 module 更快 bundless 会自动处理文件的依赖关系
        webpack 早期的没有es6 module可以用，需要webpack来打理文件的 依赖关系 打包慢是vite的9/10

- dist 目录就是我们要找上线的目录
- babel
    js语法转换器 js 得到新生，最新的语法，可以放心使用，babel 会帮我们转译
    @babel/core 核心功能
    @babel/preset-env 预处理 按环境的要求编译成相应的代码 默认 es6+ -> es5
    - webpack 是厂长 总管
    - babel 是工程师 负责把代码转译成浏览器能识别的代码
    - 将相应后缀的文件拉到babel 车间转译 babel-loader
        module test /\.js$/
        编译的工作时间
