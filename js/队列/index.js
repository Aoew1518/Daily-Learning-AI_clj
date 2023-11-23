let arr = [1,2,3,4,5,6,7,8,9,10]
arr.unshift(0)
console.log(arr)//对头加入元素0

arr.push(11)//队尾加入元素11
console.log(arr)

arr.shift()//对头删除元素0
console.log(arr)

arr.pop()//队尾删除元素11
console.log(arr)

arr.splice(1,5)//队中删除从下标1开始的5个元素[2,3,4,5,6]
console.log(arr)

arr.splice(1,0,1.5)//第二个参数为0，表示从下标1开始插入元素1.5
console.log(arr)

arr.splice(1,1,1.5)//第二个参数为1>0，表示删除下标1开始的1个元素,然后此处插入元素1.5
console.log(arr)

arr.splice(1,2,1.5)//第二个参数为2>0，表示删除下标1开始的2个元素,然后此处插入元素1.5
console.log(arr)



// queue 先进先出 只有push 和shift 方法的数组

// const queue = []
// queue.push('辣椒炒肉')
// queue.push('酸辣土豆丝')
// queue.push('水煮肉片')

// while(queue.length){
//     top=queue.shift()
//     //console.log(queue.shift())
//     console.log('今晚吃' + top)
// }