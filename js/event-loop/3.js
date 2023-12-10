console.log('stard');   
async function async1() {//async function()可以看成return new Promise((resolve) => {}),即同步代码
  await async2()  // 浏览器给await开小灶提速，现在await在型版本的浏览器中会被立即执行(可看成同步代码
  console.log('saync1 end');  // 被await挤入微任务队列
} 
async function async2() {
  console.log('saync2 end');
}
async1()
setTimeout(function() {
  console.log('setTimeout');
}, 0)
new Promise((resolve) => {
  console.log('promise');
  resolve()
})
.then(() => {
  console.log('then1');
})
.then(() => {
  console.log('then2');
})
console.log('end');

// stard   saync2end   promise   end    saync1end   then1  then2  setTimeout