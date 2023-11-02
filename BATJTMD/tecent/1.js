//函数要注意什么
//编写一个 函数，返回一个美国座机格式的电话号码（123）4567-890
// 输入是数字数组[1,2,3,4,5,6,7,8,9,0]
//不用急于写代码，先写注释
//大厂，代码可读性升值比功能重要一个等级
//不用读代码，看完注释拿来就用。
//10w 人  5w合作

/**
 * @func 返回美国格式的座机号码
 * @param {Array} nums [1234567890] 
 * @returns {String} （123）4567-890
 */

// function createPhoneNumber(nums) {
//     return "(" + nums[0] + nums[1] + nums[2] + ")" + 
//             nums[3] + nums[4] + nums[5] + "-" 
//             + nums[6] + nums[7] + nums[8] + nums[9]
// }

//js里的函数还能怎么写？es6+ 语法
let createPhoneNumber // undefined 类型未定义  let 生命了undefined的变量
createPhoneNumber = function (nums) { // 函数表达式来定义一个函数
    return "(" + nums[0] + nums[1] + nums[2]
    + ")" + nums[3] + nums[4] + nums[5]
    + "-" + nums[6] + nums[7] + nums[8] + nums[9]
}

createPhoneNumber([1,2,3,4,5,6,7,8,9,0])

//还有别的实现方法吗？
for (let i = 0; i < nums.length; i++) {
    format = format.replace('x', nums[i])
}