function xq() {
  return new Promise((resolve, reject) => {
    // Promise立马调用，但是内部的定时器要回调后调用
    setTimeout(() => {
      console.log('涛哥相亲了');
      resolve('相亲成功')
    }, 2000)
  })
}

function marry() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('涛哥结婚了');
      resolve()
    }, 1000)
  })
}

function baby() {
  console.log('小小涛');
}

xq()
.then((res) => {  // then自己就会返回一个promise对象
  return marry()
})
.then(() => {
  baby()
})
//xq()函数立即执行返回一个Promise()函数，此时.then()不会触发，
//必须要 Promise()中的resolve()生效后才能触发.then()
// xq().then()要执行后面的内容必须要xq()执行完后调用了内部的resolve()才能执行后面的
