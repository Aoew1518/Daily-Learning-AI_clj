function add(a,b){
    if(arguments.length !== 2){
        throw new Error('参数不合法')
    }  
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('必须都为整数')
    }
    return a+b;
}
// 记忆函数 白搭的
function memorize(f){
    if(typeof f !== 'function')
        return ;
    var cache = {}//空间换时间 不会被销毁的自由变量  
    return function(){
        var key = arguments.length + Array.prototype.join.call(arguments,',');
        // 判断是否是俩个数
        if(key in cache){
            return cache[key];
        }
        else{
            // var res = f.apply(this,arguments);
            // cache[key] = res;
            // return res
            return cache[key] = f.apply(this,arguments);
        }
    }
}

const memoizedAdd = memorize(add);
console.log(memoizedAdd(1,2))
console.log(memoizedAdd(1,2))
// 2+[1,2]

// add(1,2);