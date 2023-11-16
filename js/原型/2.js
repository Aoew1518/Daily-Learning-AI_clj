// Car.prototype.name = 'BMW'
// Car.prototype.long = 4900
// Car.prototype.height = 1400

Car.prototype = {
    name: 'BMW',
    long: 4900,
    height: 1400
  }
  
  function Car(owner, color) {
    // this.name = 'BMW'
    // this.long = 4900
    // this.height = 1400
    this.owner = owner
    this.color = color
  }
  
  let car = new Car('李总', 'red')
  let car2 = new Car('戴总', 'pink')
  
  
  console.log(car);