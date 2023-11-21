// var Foo = () => {
// }
// new Foo();
// 箭头函数不能做构造函数
//输出会报错

function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.name}.`);
  }
  
  const person = { name: 'John' };
  
  greet.call(person, 'Alice');