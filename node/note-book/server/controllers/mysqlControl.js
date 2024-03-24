const mysql = require('mysql2');
const config = require('../config/index.js');

// 创建线程池
const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  port: config.database.PORT,
})

// 连接mysql
const allService = {
  query: function (sql, values) {
    // 链接线程
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => { // getConnection 链接pool
        if (err) {
          reject(err)
        } else {
          // 执行sql语句
          connection.query(sql, values, (err, rows) => {
            if (err) {
              reject(err)
            } else {
              resolve(rows)
            }
            connection.release()   // 释放连接
          })
        }
      })
    })
  }
}

// 登录
const userLogin = (username, password) => {
  let _sql = `select * from users where username="${username}" and password="${password}";`
  return allService.query(_sql)
}

// 查询 
const userFind = (username) => {
  let _sql = `select * from users where username="${username}";`
  return allService.query(_sql)
}

// 注册
const userInsert = ( nickname, username, password ) => {
  let _sql = `insert into users( nickname, username, password ) values ("${nickname}","${username}","${password}");`
  return allService.query(_sql)
}

// 根据type查找日记列表
const findNoteListByType = (type) => {
  let _sql = `select * from note where note_type = "${type}";`
  return allService.query(_sql)
}

// 根据id查找详细的日记内容
const findNoteDetailById = (id) => {
  let _sql = `select * from note where id = "${id}";`
  return allService.query(_sql)
}

// 发布
const notePublish = (values) => {
  let _sql = `insert into note set userId=?,title=?,note_type=?,note_content=?,c_time=?,m_time=?,head_img=?,nickname=?;`
  return allService.query(_sql, values)
}

module.exports = {
  userLogin,
  userFind,
  userInsert,
  findNoteListByType,
  findNoteDetailById,
  notePublish
}