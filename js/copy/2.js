// let a = {
//   name: '雨程'
// }
// let b = Object.create(a)
// a.name = '涛哥'
// console.log(b)
// console.log(b.name);


// let obj = { name: 'Alice', age: 25 };
// let newObj = Object.create(obj);

// console.log(newObj); // 输出: {}
// console.log(newObj.name); // 输出: Alice
// console.log(newObj.age); // 输出: 25

// 修改原始对象
// obj.age = 30;

// console.log(obj); // 输出: { name: 'Alice', age: 30 }
// console.log(newObj); // 输出: {}
// console.log(newObj.age); // 输出: 30



// let a = {
//   name: '雨程',
//   like: {
//     n: 'coding'
//   }
// }
// let b = Object.assign({}, a)
// a.like.n = 'running'
// console.log(b);


let arr = [1, 2, 3, {n: 10}]
// let newArr = [].concat(arr)
// let newArr = [...arr]
let newArr = arr.toReversed().reverse()
arr[3].n = 100

console.log(newArr);