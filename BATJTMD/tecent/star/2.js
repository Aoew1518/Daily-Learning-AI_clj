/**
 * @func 返回美国格式的座机号码
 * @param {Array} nums 点赞的人的名字数组
 * @returns {String} （123）描述
 * @authir cyy 2023/10/31 腾讯商业部
 */
//驼峰式的命名方式，可读性
function getPostLikes(names){
    //JS var | es6 const let
    const templates = [
        '暂无人点赞',
        '{name}点赞了这篇文章',
        '{name}和{name}点赞了这篇文章',
        '{name}、{name}和{name}点赞了这篇文章',
        '{name}、{name}和{n}个其它人点赞了这篇文章',   
    ]
    //Math.min js内置的数学对象
    let idx=Math.min(names.length, 4);//0 1 2 3 4
    //用户数量对应的模板
    //正则表达式 规格 / 规则 /
    //g 修饰符 全局 匹配全部为止
    return templates[idx].replace(/{name}|{n}/g,function(val){
        //
        return val === '{name}' ?  names.shift():names.length
    })
}

console.log(getPostLikes([]));
console.log(getPostLikes(['美美']));
console.log(getPostLikes(['美美','燕子']));
console.log(getPostLikes(['美美','燕子','徐昊']));
console.log(getPostLikes(['美美','燕子','徐昊','wxc']));