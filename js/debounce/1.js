// 函数 JS里函数是一等对象
// 大写，+ new 运行 == 构造函数
// class Person{

// }
function Person(name, age) {
    // this
    // console.log(this);
    this.name = name
    this.age = age

}
// 类的方法 static 静态方法
Person.prototype.sayHello = function () {
    console.log('hello')
}
// new和typeof 都一样 运算符 
// new在函数前面，这个函数就是以构造函数执行
// 函数是可以执行的对象，执行栈
// 数组是可以迭代的对象
// let hu = Person('胡总', 18) 
// wanwan是以Person为原型构造的，new Person new Object
// person 原型Object
let wanwan = new Person('万总', 18)
console.log(wanwan.name,wanwan.age)
wanwan.sayHello();
console.log(wanwan.toString());
// console.log(wanwan.__proto__.__proto__.__proto__)