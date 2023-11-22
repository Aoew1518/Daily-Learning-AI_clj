function add(a, b) {
    // 1.使用 Array.from() 方法：Array.from() 方法可以将类数组对象或可迭代对象转换为真正的数组。它接受一个类数组对象作为参数，并返回一个新的数组。
    // const arr = Arrray.from(arguments);

    // 2.使用扩展运算符 ...：扩展运算符 ... 可以将一个可迭代对象展开，从而创建一个新数组。
    // console.log([...arguments])
    
    console.log(Array.prototype.join.call(arguments, '-'))
    // console.log(Object.prototype.toString.call(arr))
    // 参数数量？ this  arguments 
    console.log(a, b, arguments[0], arguments[1])
    console.log(typeof arguments,'111')
    // console.log(arguments.join('--'))

    // var c 
    if (arguments.length != 2) {
        throw new Error('必须传递两个参数')
    }
    return a + b
}

try {
    console.log(add(1, 2));
} 
catch(e) {
    console.log(e)
}
console.log('continue....')