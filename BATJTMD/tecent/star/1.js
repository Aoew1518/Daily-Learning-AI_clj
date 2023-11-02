/**
 * @func 返回美国格式的座机号码
 * @param {Array} nums 点赞的人的名字数组
 * @returns {String} （123）描述
 * @authir cyy 2023/10/31 腾讯商业部
 */
//驼峰式的命名方式，可读性
function getPostLikes(names){
    switch(names.length){
        case 0:
            return '暂无人点赞';
        case 1:
            //es6 字符串模板
            //return ``
            return `${names[0]}点赞了这篇文章`;
        case 2:
            return `${names[0]}和${names[1]}点赞了这篇文章`;
        case 3:
            return `${names[0]}、${names[1]}和${names[2]}点赞了这篇文章`;
        default:
            return `${names[0]}、${names[1]}和${names.length - 2}个人点赞了这篇文章`;
    }
}

console.log(getPostLikes([]));
console.log(getPostLikes(['美美']));
console.log(getPostLikes(['美美','燕子']));
console.log(getPostLikes(['美美','燕子','徐昊']));
console.log(getPostLikes(['美美','燕子','徐昊','wxc']));
console.log(getPostLikes(['美美','燕子','徐昊','wxc']));

