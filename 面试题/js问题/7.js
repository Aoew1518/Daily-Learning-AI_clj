// function add(a,b,c){
//     return a+b+c;
// }
// add(1,2,3); // 6

// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }
//     }
// }
// const res = add(1)(2)(3); // 6

// console.log(res);



// 示例
function sum(a, b, c) {
    return a + b + c;
}
function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function (...moreArgs) {
                return curried.apply(this, args.concat(moreArgs));
            };
        }
    };
}


let curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 输出 6
console.log(curriedSum(1, 2)(3)); // 输出 6
console.log(curriedSum(1)(2, 3)); // 输出 6
