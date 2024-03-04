class Parent{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
}

class Child extends Parent{
    constructor(name,type){
        super(name);
        this.type = type;
    }
}

let c = new Child('child',18);
console.log(c.getName); // child