# AI SQL Agent

Gpts 苹果应用商店
AI 应用时代到来

- 少量SQL知识来做数据分析

- sqlite3
    轻量级的关系型数据库
    小，好安装，本地化友好， demo（跑模型）， 三大范式
    - conn 连接对象
    - 数据库的相应操作 cursor
    - cursor.execute(sql)
    - 查询事务， conn.commit() 不然可以回滚
        购买为例子 没有付钱 取消 退款
    - 数据类型 REAL 浮点
    - ？ 值的占位符
    - 释放连接 并发的

- 为什么要用AI做数据分析
    - 提出数据分析可能是任何人， 老板， 运营， 程序员
    - 用自然语言表达， AI理解， 帮我们生成SQL， 再跟sqlite 通信

## 代码生成

- LLM 为数据分析带来了新的范式
    - 旧的SQL
    - SQL的生成
    - 生成业务代码

- 底层
    - 用自然语言表达我们的数据查询需求
    - LangChain是能够组合各种组件， 执行任务的机制
    - utilites SQLDatabase
    - llms OpenAI
    - SQLDatabaseChain
    - run