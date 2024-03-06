// let a = Symbol('a');
// let b = 123n;

// console.log(typeof(a), typeof(b)); // symbol bigint
// console.log(typeof(null)); // object 历史遗留问题
// console.log(typeof([1,2,3])); // object
// console.log(typeof(function(){})); // function

// console.log([1,2,3] instanceof Array) // true   Array.__proto__ === Array.prototype
// console.log([1,2,3] instanceof Object) // true  Array.__proto__.__proto__ === Array.prototype

let c = []

function instanceof_of(L, R){
    L = L.__proto__
    R = R.prototype
    while(L !== R) {
        if(L === null) 
            return false
        L = L.__proto__
    }
    return true
}

console.log(instanceof_of(c, Array)) // true
console.log(instanceof_of({}, Array)) // false
console.log(instanceof_of(c, Object)) // true
console.log(instanceof_of(c, Function)) // false

console.log(Object.prototype.toString([])) // [object Object] 判断错误
console.log(Object.prototype.toString.call([])) // [object Array]
console.log(Object.prototype.toString.call(Function)) // [object Function]
console.log(Object.prototype.toString.apply([])) // [object Array]
