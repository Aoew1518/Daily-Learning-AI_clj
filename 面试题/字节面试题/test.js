var arr = [1,2,3]
var arr1 = {0:1, 1:2, 2:3}

// for(let i in arr){
//     console.log(i) // 输出下标 0 1 2
// }

// for(let i of arr){
//     console.log(i) // 输出1 2 3
// }

// for(let i in arr1){
//     console.log(i) // 输出key值 0 1 2
// }

// for(let i of arr1){
//     console.log(i) // 报错，arr1 is not iterable
// }

console.log(Object.values(arr1))