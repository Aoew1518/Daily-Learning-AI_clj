## openai api demo

- 自我介绍
    - 了解openai 接口调用 完成内容生成、情感分析NLP任务

- 高级模块化方案理解
    - 早期js没有模块化方案
        完成一些事件 执行脚本
    - nodejs模块化方案
        程序执行跟本：二进制可执行文件
        js chrome v8引擎 js 代码文本 -> v8 字节码
        node 使用从c++封装了v8引擎 引入一个模块化机制 commonJS
        编译器
        缺点？ MVC? Model View Controller
        /posts -> 后端路由 -> controller
    - commonjs 和 es6 模块化 相比？ es6 Module 更优秀
    - 如何在node中 使用es6 Module mjs

- js 模块化
- 异步处理
    async/await es7
    - 举例 AIGC openai 接口 封装 chat saync 函数
        因为在内部调用的openai-chat接口是异步的
        - chat messages 是数组
            system 出现一次， 用于指定chat bot 的职责 假如你是一位前端大厂p8面试官
            user 用户 提问内容
            assistant 助理， openai 返回内容

            openai 可以接受比较长的token 为了回答问题更人性化
            messages 会越来越大，聊天上下文(context)

- openai tokens 是有上限的吧？ 怎么办？ top_k
    LRU 最近最少使用