#  百度面试题

- NaN
    - HTML5 提供了增强的表单类型 email/number/range/color...
    - 字符串，age -> parseInt(age) 确保类型和值正确
        无法解析为number，NaN来表达 Not a number 类型是NaN

- [1,2,3].map(parseInt) 返回 [1,2,3]

- 看NaN的文档 parseInt(str,radix)
    map(item,index,array)
    parseInt(item,radix)

    parseInt(1,0) //没有0进制，默认为10进制
    parseInt(2,1) //1进制，1进制中没有2, NaN
    parseInt(3,2) //2进制，2进制中没有3，NaN

- npm init -y 初始化为一个后端项目 package.json
- npm i json -server 多一个 node_modules(里面安装有node.server以及很多库函数)
- db.json 把数据以json存在这个文件中
- script dev: json-server -w db.json
    http://localhost:3000/posts api服务