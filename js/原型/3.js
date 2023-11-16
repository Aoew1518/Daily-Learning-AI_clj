Car.prototype.name = 'BMW'
Car.prototype.long = 4900
Car.prototype.height = 1400


function Car(owner, color) {
  this.owner = owner
  this.color = color
}

let car = new Car('李总', 'red')
let car2 = new Car('戴总', 'pink')

// car.name = '奔驰'
delete Car.prototype.name

console.log(car2.name);
