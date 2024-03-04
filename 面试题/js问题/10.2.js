Parent.prototype.say = 'hello'
function Parent(){
    this.name = 'parent';
}

function Child(){
    // Parent()  // 相当于this指向window
    Parent.call(this); // this 指向当前对象
    this.type = 'child';
}

let c = new Child();
console.log(c.name);  // 1. undefined 2. parent
// console.log(window.name);  // parent
console.log(c.say); // undefined, 继承不到父类的原型方法
