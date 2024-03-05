var obj = {
    name: 'Tom',
}

function foo(x, y) {
  console.log(this.name, x + y);
  return 'hello'
}


Function.prototype.myBinde = function() {
    let obj = arguments[0] ? arguments[0] : window
    let args = [...arguments].slice(1)
    let that = this

    const back = function(...arg) {     
        // 让this的指向指到 obj
        // back 有没有被new调用
        if(this instanceof back){
            // 让new作用于that
            return new that(...args, ...arg)
        }
        // that.call(obj, ...[...args, ...arg])
        return that.apply(obj, [...args, ...arg])
    }

    return back
}

let bar = foo.myBinde(obj, 2)

console.log(new bar(4));