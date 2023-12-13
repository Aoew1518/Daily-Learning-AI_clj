- 我们有一个ajax的异步获取数据的任务
- 写一个函数，并且返回promise实例， 可以thenable 可以await
- promise实例初始状态为pending this.state = 'pending'
    await p 就一直等待
- promise 构造函数中会立即执行传给他的执行器， 也就是第一个函数
    得到resolve， reject 俩个函数
    执行器就是异步窗口的容器 当异步任务结束后，成功调用



                    // 200 OK
                    // 204 No Content
                    // 206 Partial Content
                    // 304 Not Modified
                    // 400 Bad Request
                    // 401 Unauthorized
                    // 403 Forbidden
                    // 404 Not Found
                    // 405 Method Not Allowed
                    // 408 Request Timeout
                    // 409 Conflict
                    // 500 Internal Server Error
                    // 501 Not Implemented
                    // 502 Bad Gateway
                    // 503 Service Unavailable
                    // 504 Gateway Timeout
                    // 505 HTTP Version Not Supported
                    // 507 Insufficient Storage
                    // 509 Bandwidth Limit Exceeded