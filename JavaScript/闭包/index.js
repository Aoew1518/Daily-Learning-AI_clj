// function bar(){
//     console.log(myName);
// }

// function foo(){
//     var myName = "Mike";
//     bar();
// }

// var myName = "John";

// foo();

// function a(){
//     function b(){
//         var num = 1
//         console.log(count);
//     }
//     var count = 2
//     return b;
// }

// var c = a();
// c();

let count=0
function test(){
   
    count++
    return count
}
console.log(test());
console.log(test());
console.log(test());
