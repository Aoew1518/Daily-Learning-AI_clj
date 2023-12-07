// let obj = {user:'admin',password:'123'}

// let {user,password} = obj
// console.log(user,password);

// let {a,b} = obj
// console.log(a,b);// undefined

// let age = 18
// let foo = {
//     // age:age
//     age  //key和value相同的时候是可以简写为一个的
// }
// console.log(foo.age);

let obj = {
    a:1,
    b:{
        c:2
    },
    d:['hello']
}

let {a,b:{c},d} = obj
console.log(a,c,d);