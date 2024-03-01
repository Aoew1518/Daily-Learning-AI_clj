- 终局思想

    - 什么样的面试题是字节级别的
        - 初始化项目过程发生了什么？
            http 服务 5173端口
            /index.html 首页

            <script type="module" src="/src/main.js">
            Vue项目是一个应用，不是几个小文件 运行起来是非常复杂
           模块化组织文件
            js 早期 模块化能力弱 node require commonjs -> es6 import ESModule
            vit(快) 是一个现代化前端应用的构件工具( Webpack区别 require 模块化能力差且慢)
            它基于 ES2015(ES6) 的模块系统，
            使用新的 ES 标准，
            无需依赖其他工具，同时支持开发环境和生产环境构建。
            main.js 是单点入口，引入依赖文件和各个模块，项目就运行起来了
            type module 告诉浏览器以ESModule来解析文件的依赖 import