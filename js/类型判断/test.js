function A() {

}
B.prototype = new A();
function B() {

}
C.prototype = new B()
function C() {

}

let c = new C();

c.__proto__ === C.prototype
c.__proto__.__proto__ === B.prototype
c.__proto__.__proto__.__proto__ === A.prototype