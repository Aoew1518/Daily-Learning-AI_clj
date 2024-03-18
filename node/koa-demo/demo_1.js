const http = require('http');

const server = http.createServer((req, res) => { // req 前端的请求，res 后端的响应

    console.log(req.url)
})


server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});