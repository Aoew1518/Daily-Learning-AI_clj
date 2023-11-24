let obj = {}
let arr = [1, 2]
let date = new Date()
let fn = function() {}

// console.log(obj instanceof Object);
console.log(arr instanceof Array);  // true   arr.__proto__ === Array.prototype
console.log(arr instanceof Object); // true   arr.__proto__.__proto__ === Object.prototype

// console.log(date instanceof Date);
// console.log(fn instanceof Object);



function foo(obj) {
  if (obj instanceof Object) {
    // xxxx
  }
}

foo([])
