Car.prototype.run = function() {
  console.log('running');
}
Car.add = function() {
  console.log('加油中');
}
function Car() {
  this.name = 'BMW'
}

let car = new Car();
// car.run()
// car.add()
// Car.prototype.run()

Car.add()
