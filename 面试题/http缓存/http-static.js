const http = require('http');
const url = require('url');
// 绝对路径相对路径
const path = require('path');
// node 自带的文件系统
const fs = require('fs');
// const mime = require('mime');
const mime = require('mime-types');

// 前后端不分离，把一个静态资源返回给前端
const server = http.createServer((req, res) => {
  // __dirname当前js文件的绝对路径
  // 将前端请求的地址转换成url格式，再拼接www这个路径，最后读取整个文件的绝对路径
  let filePath = path.resolve(__dirname, path.join('www', url.fileURLToPath(`file:/${req.url}`)))
  // console.log(filePath);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath)//读取文件的详细参数

    const isDir = stats.isDirectory()// 用来判断读到的是文件还是文件夹
    if (isDir) {
      filePath = path.join(filePath, 'index.html')
    }
    if (!isDir || fs.existsSync(filePath)) {
      // 读取资源文件向前端返回
      const content = fs.readFileSync(filePath) // 读取文件
      const { ext } = path.parse(filePath) // 获取文件后缀名
      console.log(ext);

      // if(ext === '.png'){
      //   res.writeHead(200, {'Content-Type': 'image/png'})
      // }else{
      //   res.writeHead(200, {'Content-Type': 'text/html'})
      // }

      // res.writeHead(200, {'Content-Type': 'text/html', 'charset': 'utf-8'})
      
        // res.writeHead(200, {'Content-Type': mime.getType(ext)})
        // const contentType = mimeTypes.contentType(ext) || 'application/octet-stream';
        res.writeHead(200, {'Content-Type': mime.lookup(ext)});
      
      return res.end(content)
      // const fileStream = fs.createReadStream(filePath) // 创建可读流, node的自带流类线
      // fileStream.pipe(res) // 将流类型汇入到响应体中

    }

  }

  res.writeHead(404, {'Content-Type': 'text/html', 'charset': 'utf-8'})
  res.end('<h1>404 Not Found</h1>')
})

server.listen(3000, () => {
  console.log('server is running at port 3000')
});