// 让node 支持更先进的ES6 Module
// 代码统一 vue mvvm 设计模式 Commonjs 不够优秀 ESModule
// Node require 代码内格不统一
// 统一模块化 干掉Commonjs
// 使用ES6模块语法，引入OpenAI API所需的类和配置
import { OpenAIApi, Configuration } from 'openai'

const configuration = new Configuration({
    // apiKey: '' // API密钥
    // apiVersion: '2020-01-01', // 使用的API版本
    // userAgent: 'OpenAI-Node-SDK/1.0.0', // 用户代理标识
    // logLevel: 'debug', // 日志级别
    // logToConsole: true, // 是否将日志输出到控制台
    // logToDisk: true, // 是否将日志保存到磁盘
    // logFilePath: './log.txt' // 日志文件保存路径
})

const openai = new OpenAIApi(configuration)
// 封装了一个聊天函数
// chat 业务
/**
 * 封装的聊天函数，用于与OpenAI进行对话
 * @param {string} prompt 用户的输入信息
 * @returns {string} OpenAI给出的回复内容
 */
async function chat(input) {
    // 构建对话消息数组，用户消息和系统助理消息通过数组元素区分
    // system assistant
    // 上下文语意相关性 靠把一个数组 问的问题和返回的内容不断的假如数组
    // JSON.stringify(messages) 传给openai 得到的最新结果
    // role:'assistant',content:content
    const messages = [
        {
            role: 'user',
            content: input // input prompt
        }
    ]

    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo', // 使用的模型
        messages, // 对话消息数组
        temperature: 0 // 生成结果的随机性温度

        // max_tokens: 100, // 最大生成令牌数
        // n: 1, // 返回的结果数量
        // stream: false, // 是否流式获取结果
        // stop: ['\n'] // 结果终止符
    },
    {
        proxy:{
            host: '127.0.0.1',
            port: 7890
        }
    }
  )

    // 返回系统助理的回复内容
    return response.data.choices[0].message.content
}

const question = "what is the capital of France"
chat(question)
    .then(response => console.log(response))
    .catch(error => console.error(error))