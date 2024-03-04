function Car(color, speed){
    this.color = color;
    this.speed = speed;
    this.seat = [1, 2]
}

// Truck.prototype = Car.prototype;  // 继承,共享同一个原型对象，修改会导致它们的修改相互影响。
Truck.prototype = new Car('red', 200); // Truck 和 Car 拥有各自独立的原型对象，它们之间的修改不会相互影响。
function Truck(){
    this.container = true
}

let truck = new Truck();
let truck2 = new Truck();

// truck.seat = [5, 6]; // [1]
// console.log(truck); // Car { container: true, seat: [ 5, 6 ] }

truck.seat.push(3); // [1, 2, 3], 先找是否有seat方法，否则去原型上找

console.log(truck); // Car { container: true }
console.log(truck.seat); // [ 1, 2, 3 ]
console.log(truck2.seat); // [ 1, 2, 3 ], 因为前面的原型链继承被修改了,导致父类属性被修改
