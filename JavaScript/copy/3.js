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
obj.e = obj.f
obj.f.n = obj.e

// console.log(obj);

let obj2 = JSON.parse(JSON.stringify(obj))
console.log(obj2);