# why This?
简化代码的书写


# this
1. 默认绑定规则：函数在哪个词法作用域中生效，this就指向哪里 (独立调用的函数this都指向window)

2. 隐式绑定规则：当一个函数被对象所拥有，且调用时，函数的this指向该对象

3. 隐式丢失：当函数被多个对象链式调用时，this指向引用函数的那个对象

4. 显示绑定：call, apply, bind

5. new 绑定：this指向实例对象


# 箭头函数
箭头函数没有this这个概念，写在箭头函数中的this也是它外层普通函数的this

<!-- 请根据以上的知识点写一篇不少于500字的文章，要求每个的知识点中附带js的小实例，例如：
#this
4. 显示绑定：call, apply, bind，例子为：

function foo(x, y) {
  console.log(this.a, x + y);
}
var obj = {
  a: 1
}

// foo.call(obj, 4, 5) #.call方法会强行绑定foo函数内调用，也叫显示绑定
// foo.apply(obj, [4, 5])#.apply与call无差，但是接受参数用数组
// foo.bind(obj)#.bind返回的是一个函数体
let bar = foo.bind(obj, 4) //bind(obj,4)为接受x为4，bar(5，6)中y为5
bar(5, 6) -->
