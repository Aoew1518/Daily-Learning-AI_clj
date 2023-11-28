//立即执行函数
//async 函数修饰符 不让这个函数内部有异步,async与await是配套使用
(async function(){
    //js是单线程语言  把异步放入event loop ,先执行后同的代码
    //thenable  异步任务中控制执行顺序
    //fetch 是异步代码
//   fetch('https://i6iwwt.laf.run/get-list').then(res=>
//   res.json()).then(data=>{
//   console.log(data);
//   })

// await 把异步变同步，有利于流程控制
// await 后面跟一个promise实例
const res=await fetch('https://i6iwwt.laf.run/get-list')
const {data}=await res.json()
console.log(data);
console.log('ok');
})()