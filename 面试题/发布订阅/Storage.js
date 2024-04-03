// class Storage{
//     constructor(name){
//         this.name = name
//     }
//     static getInfo(name){
//         if(!Storage.instance){
//             Storage.instance = new Storage(name)
//         }
//         return Storage.instance
//     }
// }

// let p1 = Storage.getInfo('李总')
// let p2 = Storage.getInfo('李总')

// console.log(p1 === p2) // true

function Storage() {
    this.name = '张三';
}

const Helper = function () {
  let instance = null;
  return function () {
    if (!instance) {
      instance = new Storage();
    }
    return instance;
  }
}();

let p1 = new Helper();
let p2 = new Helper();

console.log(p1 === p2); // true
