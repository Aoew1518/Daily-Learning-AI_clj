# 前端界面开发之专业性

- 先结构哦，后样式
    BEM 使用起来
    page + hd/bd/ft

- npm i -g stylus
    node 是全栈js的命令行，后端 开发
    npm 是node的包管理器
    stylus 包是用来提升css开发速度
    i install 的简称
    -g 全局安装
    stylus --version

- common.styl .styl
    例如：stylus common.styl -o common.css
    一直监听：stylus -w common.styl -o common.css
    - stylus 是css预处理器 省去:;{}提高效率
    - tab 缩进
    - 失败，重新运行 stylus -w common.styl -o common.css
        watch 监听styl 文件的改变，自动编译 css
    - stylus 嵌套
        BE里写样式的时候，自动补全css前缀

- stylus 的功能
    - 支持变量
        晃点老板的利器

- 阿里的适配神器 flexible.js
    - 移动器不要用px 绝对单位，rem vw/vh相对单位
    <!-- - 1rem = html font-size = 100px -->
    - 不同的手机 html font-size 会去设置，不一样
        iphone 是设计稿的标准尺寸 375pt 750px 414pt
        37.5 375 有什么关系
        100vm = 10rem 都这样， 设置不一样的html font-size

- 一移动端适配手写
    - 立即执行函数，不影响外界的把功能完成
    - 1rem = vw / 10 兼容所有手机跨度
        设计稿上 750px = 2 * 350pt photoshop px单位的
        120px / 75px = ?rem
    - onresize
    - dry 设计模式原则 封装，复用
    - DOM性能不太好 缓存dom元素
    - script标签 src属性加载一个资源，异步，同步，会阻塞html下载进程 一定要放在头部，放在css之前

- 后端素养
    - requests pyhton 的http请求库
        url(ip) + get 请求 响应是？ 服务器给你返回的财经首页html的二进制流
        response.text 响应是字符串，是html文本
    - parse 一下，BeautifulSoup 解析html
        python最擅长 文本 ，数据 解析 .cvs .sql
    - find_all dom查询 内存中查找 返回的是一个列表
        人生苦短，我用python :link for link in links if "/news" in link and ".html" in link
    - 随机功能
        