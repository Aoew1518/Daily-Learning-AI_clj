# 百度HTTP底层理解

- openai.Completion 接口，实现了prompt任务
    底层封装了一次http请求，将prompt任务封装在body中，发送给百度
- http 请求
    - 构建在tcp/ip之上，传输的是数据包
    - 请求行 Post （Method） + url（openai api 地址）
    - 请求头 Authorization api-key key value < = > 401 状态码 必考，重点
        cookie ？
    - 请求体 body 请求体中可以携带一些数据，比如json，表单，文件，分包发送，上传文件
        400：用户犯错了
        json格式的参数
        {

        }
    - Http 状态码的划分
        1xx 请求中
        2xx 成功
        3xx 跳转
        4xx 客户端错误
            400 请求错误
            401 UnAuthorized 未授权
            404 Not Found 资源不存在
        5xx 服务器错误