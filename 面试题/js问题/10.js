// function Car(name){

// }

class Car{
    constructor(name){
        this.name = name;
    }
    run(){
        console.log("running");
    }
    // static 给构造函数使用
    static sell(){
        console.log("selling");
    }
}

let car = new Car("BMW");
car.run();  // running, 实例对象调用 arr.push()
Car.sell(); // selling, 构造函数调用 Array.isArray()

// arr.push()怎么使用？
let arr = [1,2,3];
arr.push(4);

// Array.isArray()怎么使用？
Array.isArray([1,2,3]); // true