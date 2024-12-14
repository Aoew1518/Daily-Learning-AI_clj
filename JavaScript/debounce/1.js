//函数  js中函数是一等对象
//大写 + new 运行 == 构造函数
function Person(name,age){
    //this
    console.log(this);
    this.name=name;
    this.age=age;
}
//类的方法 static 静态方法 实例找不到
// Person.sayHello=function(){
//     console.log('hello')
// }
Person.prototype.sayHello=function(){
    console.log('hello')
}
//new和typeof都一样，都是运算符
//new在函数前面，这个函数就是以构造函数执行
//函数是可以执行的对象，执行栈
//数组是可以迭代的对象
// wanwan是以person为原型为构造的,new Person new Object
let hu=Person('胡总',18)
let wanwan =new Person('万总',18)
wanwan.sayHello();

console.log(wanwan.__proto__.__proto__.__proto__)