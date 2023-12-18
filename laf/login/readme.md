"npm init -y" 是一个命令行指令，用于在当前目录下快速生成一个默认的 package.json 文件。package.json 文件是 Node.js 项目的配置文件，其中包含了项目的名称、版本号、依赖项等信息。

"npm i json-server" 是安装一个名为 json-server 的 npm 包。json-server 是一个基于 JSON 文件的模拟服务器工具，它能够根据提供的 JSON 文件生成 RESTful API 接口，并且支持各种 HTTP 请求方法（GET、POST、PUT、DELETE 等）。使用 json-server 可以方便地搭建一个本地的模拟服务器，用于开发和测试前端应用。

在package.json 中加入 "dev": "json-server --watch db.json"   db.json为要启动的

打开集成终端写入 npm run dev

- json-server
    npm node pageckage management
    npm 包 其中之一

- package.json 的了解
    - 项目描述文件,由npm init -y 命令创建
    - devDependencies 开发依赖
    - dependiences npm i json-server...
    - scripts 项目可运行的脚本区域
        - npm run dev 运行起来
        - "dev": "json-server --watch db.json"
          "dev"为脚本的名字,可改变

- web server    HTTP协议
    - 前端页面的server -> laf
        localhost:3000 ->线上访问,在线的域名
    - 后端server 
        json-server 启动的api接口