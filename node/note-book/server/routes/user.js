const Router = require('@koa/router')
const router = new Router()
// 定义接口地址
router.post('/user/login', (ctx) => {
    console.log(132123123);
    console.log(ctx.request.body);
})

module.exports = router