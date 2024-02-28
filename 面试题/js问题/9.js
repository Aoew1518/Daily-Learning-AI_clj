// Foo.prototype.age = 18
// function Foo(name){
//     this.name = name;
// }

// let f = new Foo('Tom')

// {name: "Tom"}      __proto__: Object { age: 18 }

Car.prototype = {
    name : '宝马'
}
function Car(color){
    this.color = color;
}

let c= new Car('red');
let h = new Car('blue');