// set 对象 对象成员是唯一的  有长度

let s = new Set([1,1,2,2,3,3]) //类数组，有下标
console.log(s); // 1,2,3
console.log(s['1']); // 不能得到值，不是普通对象
console.log(s.size);


let arr = [1,1,2,2,3,3]
let newArr = [...new Set(arr)]
console.log(newArr);

let x = new Set([1,2,3])
x.add(4)
x.delete(1)
x.delete(5)
//Set 对象 无法修改
console.log(x.has(1));
s.clear() //清空
console.log(x);

// 遍历
x.forEach((item,key,x) =>{
    console.log(item,key,x);
})

console.log(s.values());// 返回一个对象类数组
for (let value of x.values()){ // for of 用于遍历具有迭代器属性（Iterator）的对象
    console.log(value);
}

for (let value of x.keys()){ // for of 用于遍历具有迭代器属性（Iterator）的对象
    console.log(value);
}

for (let item of x.entries()){ // 是二维数组，返回key和value  [[1,1],[2,2],[3,3]]
    console.log(item);
}