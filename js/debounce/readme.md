# JS八股文之防抖首选

## 前端的“三清
- window
    BOM 浏览器对象 负责BOM之外的浏览器功能
- document
    DOM js hui'gen DOM“交流”
- Object
    JS的顶层对象
    new Object()  {}简写
    wan.__proto__(私有属性,原型) -> Object -> null
- JS类
    - 大写的函数作为构造函数
        new + this 完成由{} 空对象到构造函数完成的过程
        对象就有属性了
    - 对象的方法呢？
        构造函数的prototype上
    wanwan 和 Person 没有血缘关系，女娲和人？
    构造的过程 new Person {} Object 空对象
    Person.prototype{}
- Person.prototype 原型
- Object.prototype 原型
- wanwan.__proto__.__proto__.__proto__ 原型链
- 原型的哪一栈上有的方法，对象都可以用
- JS面向对象不是血缘的，而是面向原型的