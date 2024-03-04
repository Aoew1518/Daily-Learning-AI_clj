Parent.prototype.say = 'hello'
function Parent(){
    this.name = 'parent';
    this.car = [1, 2]
}

Child.prototype = new Parent();// 可以找到父类的原型方法
function Child(){
    // Parent()  // 相当于this指向window
    Parent.call(this); // this 指向当前对象
    this.type = 'child';
}

let c = new Child();
let c2 = new Child();

// console.log(c.name);  // 1. undefined 2. parent 3. Parent.call(this)可以实现
// // console.log(window.name);  // parent 
// console.log(c.say); // 1.undefined, 继承不到父类的原型方法 2. Child.prototype = new Parent()可以实现

c.car.push(3);

console.log(c2.car); // 创建了俩对象 Parent.call(this)被调用俩次,this指向地址不一样