// let a = {
//   name: '雨程'
// }
// let b = Object.create(a)
// a.name = '涛哥'
// console.log(b.name);



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