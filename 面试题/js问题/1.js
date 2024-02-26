const arr = ['a', 'b', 'c', 'd', 'e', 'f']
const arr2 = arr.splice(2, 2); // 修改原数组，返回删除的元素，从索引2开始，删除2个元素

console.log(arr2);  // 输出: ['c', 'd']

const arr3 = ['a', 'b', 'c', 'd', 'e', 'f']
const arr4 = arr3.slice(2, 4) // 不修改原数组，返回删除的元素，从索引2开始，删除2个元素

console.log(arr4);  // 输出: ['c', 'd']

console.log(arr3.fill('x', 2, 4)); // 修改原数组，填充从索引2开始，到索引4结束的元素，填充为x

