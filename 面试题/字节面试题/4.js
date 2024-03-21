Object.prototype[Symbol.iterator] = function() {
    return Object.values(this)[Symbol.iterator]()
}

// var {a, b} = {a:{c:1}, b:{d:2, e:3}}
// console.log(a, b) // 输出1 2

// 现在要使得等式成立
var [a, b] = {a:{c:1}, b:{d:2, e:3}}
console.log(a, b) // 输出1 2


// var arr = [1,2,3,4,5,6]
// var arr1 = {0:1, 1:2, 2:3}
// for(let i of arr){
//     console.log(i) // 输出1 2 3 4 5 6
// }

// for(let i in arr){
//     console.log(i) // 输出下标 0 1 2 3 4 5
// }