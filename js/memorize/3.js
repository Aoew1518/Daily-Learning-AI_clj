var a= 2 + [1,2] +3 
console.log(a)

function addtext(a,b){
    var key = arguments.length + Array.prototype.join.call(arguments,',');
    return key;
}
console.log(addtext(1,2))

// let count = 0;
// var fibonacci = function(n){
//     count ++;
//     return n < 2 ? n : fibonacci(n-1) + fibonacci(n-2); 
// }

// function memorize(f){
//     if(typeof f !== 'function')
//         return ;
//     var cache = {}//空间换时间 不会被销毁的自由变量  
//     return function(){
//         var key = arguments.length + Array.prototype.join.call(arguments,',');
//         // 判断是否是俩个数
//         if(key in cache){
//             return cache[key];
//         }
//         else{
//             // var res = f.apply(this,arguments);
//             // cache[key] = res;
//             // return res
//             return cache[key] = f.apply(this,arguments);
//         }
//     }
// }

// // fibonacci = memorize(fibonacci)
// console.time("fibonacci")
// console.log(fibonacci(20))
// console.log(count)
// console.timeEnd("fibonacci")