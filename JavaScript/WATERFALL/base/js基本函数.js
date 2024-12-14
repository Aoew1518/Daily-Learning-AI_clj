var arr=['a','b','c','d',1]
var arr2=[1,2,3]
// 增删改查：
// arr.push('e')//尾部加元素
// arr.pop()//尾部删一个元素
// arr.unshift(1)//头部加一个元素1
// arr.shift(1)//头部删除第一个元素
// arr.splice(1,2,4)//删除从1位置的开始的连续俩位元素,再从1位置增加一个元素

//数组的自带函数：forEach,map,indexOf,includes(),lastIndexOf()
// arr.forEach(function(item,index,arr){//回调函数
//     arr[index]=item+2
//     console.log(item,index,arr);//显示元素和下标以及原数组
// })

// var newArr=arr.map(function(item,index,arr){
//     return item+2//返回数组的每一项，可以在每一项里面操作
// })

// console.log(arr.indexOf('a',2));//返回查找元素的下标，第二位元素代表从2下标位置开始找

// console.log(arr.includes(2));//返回查找元素的是否存在true,false

// console.log(arr.lastIndexOf('b'));//从右往左开始查找，但是下标依旧不变，无第二位元素

// console.log(arr.concat(arr2))//将arr2数组的元素加入arr数组
// console.log([].concat(arr,arr2))//同理
