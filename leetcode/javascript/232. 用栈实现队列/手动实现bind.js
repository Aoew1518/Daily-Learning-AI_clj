Function.prototype.myCall = function (context = window, ...args) {
    context.fn = this
    const result = context.fn(...args)
    delete context.fn
    return result
}

Function.prototype.myApply = function (context = window, args) {
    context.fn = this
    const result = context.fn(...args)
    delete context.fn
    return result
}

Function.prototype.myBind = function (context = window, ...args) {
    const that = this
    return function Fn(...newArgs) {
        if (newArgs.length === 0) {
            return that.apply(context, [...args, ...arguments])
        } else {
            return that.apply(context, [...args, ...newArgs])
        }
    }
}