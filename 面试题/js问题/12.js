Person.prototype.getName = function() {
    return this.name;
}
function Person(name){
    this.name = name;
}

// let p = new Person('Tom');

// console.log(p.name); // 输出：Tom
// console.log(p.getName()); // 输出：Tom

let p = myNew(Person,'Tom')

function myNew(...args) {
    let obj = {}
    obj.__proto__
}