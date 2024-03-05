let age = Symbol('key')
var obj = {
    name: 'Tom',
    [age]: 123
}

function foo(x, y) {
  console.log(this.name, x + y);
  return 'hello'
}

// foo.call(obj, 1, 2);

Function.prototype.myCall = function() {
    // 让obj调用foo触发隐式绑定
    // this arguments[0] [...arguments].slice(1)
    let obj = arguments[0] ? arguments[0] : window
    let args = [...arguments].slice(1)
    let key = Symbol('key')
    obj[key] = this

    let res = obj[key](...args)  // 隐式绑定,当函数被一个对象所调用时，函数的this指向该对象
    delete obj[key]
    return res
}

foo.myCall(obj, 1, 2); // Tom 3
console.log(obj) // undefined