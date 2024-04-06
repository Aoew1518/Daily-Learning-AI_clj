const Router = require('@koa/router')
const router = new Router()
const { findNoteListByType, findNoteDetailById, notePublish, noteDelete } = require('../controllers/mysqlControl')
const { formateDate } = require('../utils/index.js')

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

// 获取笔记详情
router.post('/notePublish', async (ctx) => {
    const { 
        title, 
        note_type, 
        head_img, 
        note_content, 
        userId,
        nickname,
        id
    } = ctx.request.body
    const c_time = formateDate(new Date())
    const m_time = formateDate(new Date())

    try{
        const res = await notePublish([userId, title, note_type, note_content, c_time, m_time, head_img, nickname, id], id)
        console.log(res)
        if(res.affectedRows !== 0){
            ctx.body = {
                code: '8000',
                data: 'success',
                msg: '发布成功'
            }
        }else{
            ctx.body = {
                code: '8004',
                data: 'erroe',
                msg: '发布失败'
            } 
        }
    }catch(error){
        ctx.body = {
            code: '8005',
            data: 'erroe',
            msg: '服务器异常'
        } 
    }
})

// 删除笔记
router.post('/noteDelete', async (ctx) => {
    const { id } = ctx.request.body
    try{
        const res = await noteDelete(id)
        if(res.affectedRows !== 0){
            ctx.body = {
                code: '8000',
                data: 'success',
                msg: '删除成功'
            }
        }else{
            ctx.body = {
                code: '8004',
                data: 'erroe',
                msg: '删除失败'
            }
        }
    }catch(error){
        ctx.body = {
            code: '8005',
            data: 'erroe',
            msg: '服务器异常'
        }
    }
})

module.exports = router
