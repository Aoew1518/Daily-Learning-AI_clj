let obj = {
  name: '灵洋',
  age: 18
}

// console.log(obj['name']);
// obj.age = 19
// obj.girlFriend = '小红'

let n = 'girlFriend'
obj[n] = '小红'

delete obj[n]


console.log(obj);