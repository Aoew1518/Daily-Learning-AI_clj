const Koa = require('koa')
const bodyParse = require('koa-bodyparser')// 解析post请求的参数
const app = new Koa()
const cors = require('koa2-cors')

const user = require('./routes/user.js')

app.use(bodyParse())
app.use(cors())// 处理跨域

console.log(user.allowedMethods());
app.use(user.routes(), user.allowedMethods())

app.listen(3000, () => {
    console.log('listening on port 3000');
})