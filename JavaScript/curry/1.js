function add(a, b, c){
    return a + b + c
}
console.log(add.length);//输出参数的个数

// 柯里化代码
function curry(fn){
    let judge = (...args) =>{
        if(args.length === fn.length)return fn(...args)
        return (...arg)=>judge(...args,...arg)
    }
    return judge
}

let addCurry = curry(add)
console.log(addCurry(1)(2)(3));