let parent = {
    name: 'tom',
    frindes:['foo','bar','baz'],
    age(){
        return 18;
    }
}

let child = Object.create(parent);
let child2 = Object.create(parent);

child.frindes.push('jerry')
console.log(child.frindes); // [ 'foo', 'bar', 'baz', 'jerry' ]
console.log(child2.frindes);// [ 'foo', 'bar', 'baz', 'jerry' ]