var array = [1, 1, '1', '1']
/**
 * @func uniq 数组去重
 * @param {Array} arr 
 * @return {Array} result
 * @author len 2023/11/20
 */

function uniq(arr) {
    var res = []
    // 暴力破解法 O(n^2)   两重for循环,外层循环arr,内层循环res, 
    // arr的当前项,如果不在res中,则加入res,
    // 否则跳过
    // arr.length 堆内存 读取属性 循环多少次就要读多少次
    // 用一个变量缓存, 性能优化
    for (var i = 0, arrLen = arr.length; i < arrLen; i++) {
        for (var j = 0, resLen = res.length; j < resLen; j++ ) {
            if (arr[i] === res[j]) { // 恒等
                break;
            }
        }
        if (j === resLen) {
            res.push(arr[i])
        }
    }
    return res
}
// module 模块，当前是一个uniq模块
// exports向外输出 
// 输出
module.exports = uniq