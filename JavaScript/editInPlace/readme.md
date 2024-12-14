# 面向对象 JS 练手

- editor.js 提供一个EditInPlace类的功能
    - 复用
        一个文件一个类
    - 封装
        实现的细节，只需要用，不需要了解为什么

- 动态DOM编程
    - document.createElement(tag)
    -  父节点挂载子节点
        appendChild

- 函数this 问题
    - 在面向对象中，需要this 指向实例，对象上的方法和属性
    - 时间监听等，this 丢失问题
        - 作用域链
            var that = this  外层this 还指向对象，保存
        - 箭头函数
            内部没有this
        - bind 绑定函数内部指向
            bind apply call 都是手动指定this，bind返回的是一个函数，等一下执行，多次调用，apply，call 立即执行