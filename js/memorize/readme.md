# 俩数相加

- 伪数组
    Object.prototype.toString.call()  '[Object xxx]'
    有length属性，用下标访问 但不是真正的数组，没有join等方法
    永久
    - Array.from(arguments) 伪数组转真数组
    - [...arguments]
    临时
    - Array.prototype.join.call(arguments,'--')
    null 开头也是000

- 递归
    - 自顶向下解决问题
        不停的函数入函数执行栈解决问题
    - 重复计算
        memorize
    - 不能被允许的问题
    - js 优点
        cache 就不用在全局了， 因为有闭包