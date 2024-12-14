//面试题，手动实现instanceof方法
function myInstance(L, R) {
  let left = L.__proto__
  let right = R.prototype

  while(left !== null) {
    //一直往下面找实例对象的隐式原型，直达到null才截至
    if (left === right) {
      return true
    }
    left = left.__proto__
  }
  return false
}

console.log(myInstance([], Array));//true
console.log(myInstance({}, Array));//false
console.log(myInstance([], Object));//true