function* foo(){
    yield 'a'
}

let gen = foo()  // 得到一个指向内部状态的指针对象

console.log(gen.next()) // {value: "a", done: false}
console.log(gen.next()) // {value: undefined, done: true}
