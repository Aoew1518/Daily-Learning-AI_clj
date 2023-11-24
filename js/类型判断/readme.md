# typeof
1. 可以准确的判断除null之外的原始类型
2. 可以判断 function 


# instanceof
1. 只能判断引用类型
2. 通过原型链的查找来判断


# Object.prototype.toString.call(str)
1. 
2. 
3. 设 O 是 ToObject(this), 如果传的原始类型，那就回调用ToObject将原始类型转换成对象
4. 设 class 是 O 的 [[Class]] 内部属性的值。
5. 返回 String 值，该值是连接三个 String“[object”、“class”和“]”的结果。

- xxx.call(原始值) 为什么不报错？？？？？
- toString通过读取数据结构内部属性来读取到数据的类型 class



ToObject('hello')  // {'hello'}  // [[Class]]: String


# Array.isArray()

let arr = []
arr.isArray()  // xxx