// var obj = {}
// obj.a = 1



// var num = 123
// num.a = 'hello'
// console.log(num.a); // undefined

// var num = new Number(123) // String() Number() Boolean() Object() Array() Date() 内部函数
// num.a = 'hello'
// delete num.a
// console.log(num.a);


// var num = 4
// num.len = 3
// // new Number(4).len = 3  delete
// console.log(num.len);


// 考点
// var arr = [1, 2, 3, 4]
// arr.length = 2
// console.log(arr);

var str = 'abcd'
str.length = 2

// new String('bacd').length = 2  delete

console.log(str.length); // 4
// new String('abcd').length


// function String(s) {
//   this.length = 0
// }