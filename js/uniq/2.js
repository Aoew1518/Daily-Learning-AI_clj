//引用uniq 方法 引入
// const uniq = require('./1')

// var result = uniq(array)
// console.log(result);

function unique(arr, isSorted) {
    var res = [];
    var seen;

    for (var i = 0, len = arr.length; i < len; i++) {
        var val = arr[i]; // 当前值 
        if (isSroted) {
            if (!i || seen !== val) {
                res.push(val);
            }
            seen = value;
        } else if (res.indexOf(val) === -1) {
            res.push(val);
        }
    }
    return res;
}