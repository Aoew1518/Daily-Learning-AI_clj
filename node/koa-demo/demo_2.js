const Koa = require('koa')
const app = new Koa()

const main = (ctx) => {  // ctx === req + res
    // console.log(ctx.query.id);
    // ctx.body = `hello world ${ctx.query.id}`

    console.log(ctx.url);
    if (ctx.url.startsWith('/login')) {
        // 前端在登录
        
        ctx.body = {
            data:'succes',
            msg: 'success',
        }
    }
    else if(ctx.url.startsWith('/home')){
        ctx.body = {
            data:[
                { id:1, name:'张三', age:20 },
                { id:1, name:'李四', age:20 },
                { id:1, name:'王五', age:20 },
                { id:1, name:'牛六', age:20 }
            ]
        }
    }
}

app.use(main)

app.listen(3000, () => {
    console.log('server is running at 3000')
})