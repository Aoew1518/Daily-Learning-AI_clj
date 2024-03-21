// 浅拷贝
// Object.prototype.abc = 123

// let obj = {
//   a: 1,
//   b: {
//     n: 2
//   }
// }

// let obj2 = shallowCopy(obj)

// function shallowCopy(obj) {
//   let newObj = {}
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       newObj[key] = obj[key]
//     }
    
//   }
//   return newObj
// }

// obj.b.n = 3  // 改变原对象的引用类型的值
// console.log(obj); // { a: 1, b: { n: 3 } }
// console.log(obj2);// { a: 1, b: { n: 3 } }

// 深拷贝
let obj3 = {
  a: 1,
  b: {
    n: 2
  }
}

let obj4=deepCopy(obj3)

function deepCopy(obj) {
  if (obj === null) return obj;   // 如果是null或者undefined我就不进行拷贝操作
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (typeof obj !== "object") return obj; // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  let newObj = new obj.constructor(); // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      newObj[key] = deepCopy(obj[key]);
    }
  }
  return newObj;
}


obj3.b.n = 3 

console.log(obj3) // { a: 1, b: { n: 3 } }
console.log(obj4) // { a: 1, b: { n: 2 } }
// 新对象跟原对象不共享内存