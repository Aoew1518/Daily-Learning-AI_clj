// let a = 1
// let b = a
// a = 2
// console.log(b);



// let a = {
//   age: 18
// }
// let b = a
// a.age = 19
// // a = {
// //   age: 20
// // }
// console.log(b.age);

// const obj = { name: 'Alice', age: 25 };
// const newObj = Object.create(obj);

// console.log(newObj); // 输出: {}
// console.log(newObj.name); // 输出: Alice
// console.log(newObj.age); // 输出: 25

// // 修改原始对象
// obj.age = 30;

// console.log(obj); // 输出: { name: 'Alice', age: 30 }
// console.log(newObj); // 输出: {}
// console.log(newObj.age); // 输出: 30

// const obj = { name: 'Alice', age: 25 };
// const newObj = Object.create(obj);

// console.log(newObj); // 输出: {}

// // 修改原始对象
// obj.age = 30;

// console.log(obj); // 输出: { name: 'Alice', age: 30 }
// console.log(newObj); // 输出: { name: 'Alice', age: 30 }


let obj = { name: 'Bob', age: 30 };
let newObj = Object.assign({}, obj);

console.log(newObj); // 输出: { name: 'Bob', age: 30 }

// 修改原始对象
obj.age = 35;

console.log(obj); // 输出: { name: 'Bob', age: 35 }
console.log(newObj); // 输出: { name: 'Bob', age: 35 }
console.log(newObj.age); // 输出: { name: 'Bob', age: 35 }

