const Router = require('@koa/router')
const router = new Router()
const { findNoteListByType, findNoteDetailById } = require('../controllers/mysqlControl')

// 选中笔记类型
router.post('/findNoteListByType', async (ctx) => {
    const { note_type } = ctx.request.body
    try{
        const res = await findNoteListByType(note_type)
        ctx.body = {
            code: '8000',
            data: res,
            msg: 'success'
        }
    }catch(error){
        ctx.body = {
            code: '8005',
            data: res,
            msg: '服务器异常'
        }
    }
})

// post 请求用ctx.request.body, get请求用ctx.query
// 选择当前类型的详细笔记内容
router.get('/findNoteDetailById', async (ctx) => {
    const id = ctx.query.id // const { id } = ctx.query
    const res = await findNoteDetailById(id)
    try{
        if(res.length > 0){
            ctx.body = {
                code: '8000',
                data: res[0],
                msg: 'success'
            }
        }
    }catch(error){
        ctx.body = {
            code: '8004',
            data: 'erroe',
            msg: '查找失败'
        } 
    }
})

module.exports = router
