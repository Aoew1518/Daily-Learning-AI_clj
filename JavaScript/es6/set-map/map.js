
// let arr = ['a','b','c']
// // 数组上的map方法，用于将数组中的每一项修饰完毕后存入新的数组并返回
// let newArr = arr.map((item,index,arr)=>{
//     return item + 1
// })
// console.log(newArr);

// map对象

// object数据结构中，key只能是字符串
// let arr = ['hello']
// let arr = {}
// let obj = {
//     a:1,
// }
// obj[arr] = 2

// let m = new Map([ // 接收参数为二维数组
//     ['name','A'],
//     ['age',18]
// ]);

let m = new Map();
m.set('a',1); //增
console.log(m.get('a'));//读取
m.delete('a')// 删
m.has('a') // 查 true/false
console.log(m.size);

m.set({},1) //key为{},可以为一个对象
m.set([],2) //key可以为[],可以为一个数组
m.set(true,3)
console.log(m);

// 遍历

m.forEach((vaule,key,m)=>{
    console.log(vaule,key);
})

for (let val of m.values()){
    console.log(val);
}

for (let val of m.keys()){
    console.log(val);
}

console.log(m.entries());// 对象里放了数组
for (let item of m.entries()){
    console.log(item);
}
//[{},1]
//[[],2]
//[true,3]
