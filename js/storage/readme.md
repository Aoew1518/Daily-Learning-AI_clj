实现Storage， 使得该对象为单例(只会被实例化一次的类)，基于localStorage封装，
实现方法setItem(key,value)，和getItem(key,value)

window.localStorage.setItem('token','12345')
window.localStorage.getItem('token')
只能存在同一个页面中

- localStorage 只要不手动删除就一直存在
    属于domain 安全
- 单例
    class + static
    构造函数+闭包
- 单例的登录弹窗功能时
    不要将login.html写在原html，宁愿在js里多写代码，推迟到真正登录时，再去添加，有利于首页加载速度
    80%用户可能就从来不登陆