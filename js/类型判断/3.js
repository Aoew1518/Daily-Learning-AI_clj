let obj = {}
let arr = [1, 2]
let date = new Date()
let fn = function() {}

//instanceof 判断obj是否是Object这种类型
// console.log(obj instanceof Object);
console.log(arr instanceof Array);  
// true   arr.__proto__ === Array.prototype 实例对象的隐式原型等于构造函数的显式原型
console.log(arr instanceof Object); 
// true   arr.__proto__.__proto__ === Object.prototype 构造函数的显式原型还是一个对象，它还具有隐式原型

// console.log(date instanceof Date);// true 
// console.log(fn instanceof Object);// true 


//例子
function foo(obj) {
  if (obj instanceof Object) {
    // xxxx
  }
}

foo([])
