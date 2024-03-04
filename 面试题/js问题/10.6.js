Parent.prototype.say = 'hello'
function Parent(){
    this.name = 'parent';
    // this.car = [1, 2]
    this.like = 'like'
}

Child.prototype = Object.create(Parent.prototype);// 可以找到父类的原型方法,但是调用俩次
Child.prototype.constructor = Child; // 修正指向
function Child(like){
    Parent.call(this, like); // this 指向当前对象
    this.type = 'child';
}

let c1 = new Child('coding');

console.log(c1.say);