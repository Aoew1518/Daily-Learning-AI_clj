// 后端框架 commonjs
// 服务器端 vite 是用服务器端实现的
const Koa = require('koa');
const fs = require('fs'); // node 文件系统 内置的
// 实例化koa就是一个后端应用 oop
const app =new Koa();
// ctx 对象， ctx.body 响应体
app.use(async ctx => {
    // 上下文对象
    // HTTP 是基于请求响应的简单协议
    // index.html 返回给用户就看到首页了
    // 字符串二进制流
    // 冯诺依曼原理
    // 代码在内存中运行
    // 读取文件系统里的index.html fs
    // js 异步 单线程 同步化
    // I/O 花时间
    let content = fs.readFileSync('./index.html','utf-8');
    ctx.body = content;
})

// 后端启动web服务 监听5174端口
app.listen(5174,()=>{
    console.log('5174服务器启动成功');
})
