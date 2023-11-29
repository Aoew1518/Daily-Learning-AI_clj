function sleep(t){
    const p =new Promise(resolve=>{
        setTimeout(()=>{
            resolve('promis返回的hello world')
        },t)
         
    })
    return p
}
//同步通过promise的then变成了同步

// sleep(1000)
//     .then((msg)=>{
//         console.log(msg,'-----');
//     })

// 函数返回promise
//then里面
// console.log('hello'); 

//耗时任务 promise的实例
// async 函数修饰符 函数内部有异步 es7
// 声明这个函数里有异步
// async + await 是一对，要一起出来
(async function(){
    console.log('ok');
    // 异步变同步，有利于流程控制
    // await 后面跟一个promise实例， 同步等待被 resolve
    //没有ansyc（await配套使用）时就是使用这个，但是会异步
    // 代码的编写顺序= 执行顺序
    const res= await fetch('https://i6iwwt.laf.run/get-list')
    const {data} = await res.json
    console.log(data);
    // console.log('ok');
})()