# es6 class 和 function
- js 里没有类，只有对象，函数是一等对象

- 构建类
    - class es6+？
    es6 的使命之一是让js像其他大型语言一样适合企业级开发 面向对象都是class js新增了这个关键字
    只是一颗语法糖，原型式的面向对象没有改变都可以对应function
    - 构造函数 + 原型对象 + 实例
    实例和 类 没有血缘关系？ js 没有类
    构造函数 执行 this 指向实例，完成实例属性的创建
    原型对象 实例 .__proto__ 指向原型对象，原型对象是构造函数的实例
    原型对象 constructor 属性告诉 实例这是哪个构造函数的 instanceof 判断实例和构造函数的关系

    - for key in 原型对象上哪些方法是可以被遍历的
    发现constructor 方法，原型对象上没有 constructor 方法，所以原型对象上不能被遍历
    
    - 语法糖
        class Person 原先式的面向对面
        Person.prototype 和es5 方式来声明是一样的,
        class.Person.prototype 声明的方法不可能不可遍历
