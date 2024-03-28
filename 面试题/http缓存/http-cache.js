const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const mime = require("mime-types");
const checksum = require("checksum");

const server = http.createServer((req, res) => {
  let filePath = path.resolve(
    __dirname,
    path.join("www", url.fileURLToPath(`file:/${req.url}`))
  );
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath); //读取文件的详细参数
    const isDir = stats.isDirectory(); // 用来判断读到的是文件还是文件夹
    if (isDir) {
      filePath = path.join(filePath, "index.html");
    }
    // -----------------------------------------------------------
    if (!isDir || fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath); // 读取文件
      const { ext } = path.parse(filePath); // 获取文件后缀名
      const timeStamp = req.headers["if-modified-since"]; // 获取请求头中的时间戳
      let status = 200;

      if (timeStamp && Number(timeStamp) === stats.mtimeMs) {
          status = 304;
      }

      checksum.file()(filePath, function (err, hash) {
          const resStream = fs.createReadStream(filePath);
          sum = `"${sum}"`
      })

      res.writeHead(status, {
        "Content-Type": mime.lookup(ext),
        "Cache-Control": "max-age=86400", // 设置缓存时间为一天
        "etag": `"${stats.mtimeMs}"`, // 设置签名
        // "Last-Modified": stats.mtimeMs, // 时间戳
      });

      return res.end(content);
    }
  }

  res.writeHead(404, { "Content-Type": "text/html", charset: "utf-8" });
  res.end("<h1>404 Not Found</h1>");
});

server.listen(3000, () => {
  console.log("server is running at port 3000");
});
