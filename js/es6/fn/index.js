function bar(a, ...args){  // rest 参数 ...  剩余的,...args代表传入的所有参数
    console.log(args);//输出2，3
}
bar(1,2,3)

console.log(bar.name);