# 拷贝
通常只针对引用类型


# 浅拷贝
- 通过方法把某个对象完整拷贝后，原对象的修改会影响新的对象

- 常见的浅拷贝方法：
1. Object.create(obj)
2. Object.assign({}, obj)
3. [].concat(arr)
4. 数组解构
5. arr.toReversed().reverse()


# 深拷贝
JSON.parse(JSON.stringify(obj))
但是这个方法有缺陷：
1. 不能处理 undefined，function，Symbol 这些数据类型
2. 无法处理循环引用


