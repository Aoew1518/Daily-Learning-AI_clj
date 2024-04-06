const Koa = require('koa');
const app = new Koa()
const bodyParser = require('koa-bodyparser');  // 解析post请求的参数
const cors = require('koa2-cors'); // 处理跨域

// 引入路由
const user = require('./routes/user.js')
const note = require('./routes/note.js')

app.use(bodyParser())
app.use(cors())  

// const main = (ctx) => {
//   if () {

//   } else if () {

//   } 
//   ...
// }
// app.use(main)

// allowedMethods 允许跨域
app.use(user.routes(), user.allowedMethods())
app.use(note.routes(), note.allowedMethods())


app.listen(3000, () => {
  console.log('listening on port 3000');
})
