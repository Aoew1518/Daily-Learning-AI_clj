function xq() {
  return new Promise((resolve, reject) => {
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

// async  === return new Promise((resolve, reject) => {})
async function foo() {
  await xq()
  await marry()
  baby()
}
foo()