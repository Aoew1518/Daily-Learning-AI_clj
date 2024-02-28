// function foo(){
//     let a = 1
//     let b = 1

//     function bar(){
//         console.log(a)
//     }

//     return bar
// }

// let baz = foo()

// baz() // 1

function fn(){
    let count = 0

    const foo = function(){
        count++
    }

    const bar = function(){
        count--
    }
    return{foo,bar}
}

const {foo,bar} = fn()
foo() // 1