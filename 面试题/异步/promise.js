// 手写一个js中的promise
function MyPromise(executor) {
    this.status = 'pending';
    this.value = null;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = value => {
        this.status = 'fulfilled';
        this.value = value;
        this.onFulfilledCallbacks.forEach(callback => callback());
    };

    const reject = reason => {
        this.status = 'rejected';
        this.value = reason;
        this.onRejectedCallbacks.forEach(callback => callback());
    };

    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }

    
}

// 使用示例
// MyPromise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hello, world!');
//     }, 1000);
// }).then(value => {
//     console.log(value);
// }, error => {
//     console.error(error);
// });