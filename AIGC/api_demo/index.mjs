// 让node 支持更先进的ES6 Module
// VUE  MVVM  设计模式  Commonjs 不够优秀， ESModule 
// 代码统一
// Node  require  代码内格不统一  js 优势就是一份代码前后端 运行， 
// 统一模块化 干掉CommonJS 
import { OpenAIApi, Configuration} from 'openai'
// api key 配置 
const configuration = new Configuration({
    // apiKey: ''
})

const openai = new OpenAIApi(configuration);
// 封装了一个聊天函数
// chat 业务
async function chat(input) {
    // system  assistant 
    // 上下文语义相关性 靠把一个数组 问的问题和返回的内容不断的加入数组
    // JSON.stringify()  传给openai 得到最新d结果 
    // role:'assistant', content: content 
    const messages = [{role:'user', content: input}]; 
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages,
        temperature:0
    }, {
        proxy: {
            host: '127.0.0.1',
            port: 7890
        }
    }) 
    return response.data.choices[0].message.content
}

const question = "What is the capital of France"
chat(question)
    .then(response => console.log(response))
    .catch(error => console.log(error))