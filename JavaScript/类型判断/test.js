function A() {

}
B.prototype = new A();
function B() {

}
C.prototype = new B()//构造函数C.prototype = B的实例对象
function C() {

}

let c = new C();//实例对象c是由构造函数C得到

c.__proto__ === C.prototype
c.__proto__.__proto__ === B.prototype
c.__proto__.__proto__.__proto__ === A.prototype