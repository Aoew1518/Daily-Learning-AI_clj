let obj = {
  name: '李总',
  age: 18,
  a: {
    n: 1
  },
  b: undefined,
  c: null,
  d: function() {},
  e: Symbol('hello'),
  f: {
    n: 100
  }
}

function deepCopy(obj) {
  let objCopy = {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 区分 obj[key] 原始类型和引用类型
      if (obj[key] instanceof Object) { // 不能直接赋值
        objCopy[key] = deepCopy(obj[key]);
      } else {
        objCopy[key] = obj[key]
      }

    }
  }

  return objCopy
}

let obj2 = deepCopy(obj);
obj.a.n = 11
console.log(obj2);
