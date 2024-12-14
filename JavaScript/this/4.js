function foo(x, y) {
  console.log(this.a, x + y);
}
var obj = {
  a: 1
}

// foo.call(obj, 4, 5) #.call方法会强行绑定foo函数内调用，也叫显示绑定，此处便调用obj对象的范围
// foo.apply(obj, [4, 5])#.apply与call无差，但是接受参数用数组
// foo.bind(obj)#.bind返回的是一个函数体
let bar = foo.bind(obj, 4) //bind(obj,4)为接受x为4，bar(5，6)中y为5
bar(5, 6)