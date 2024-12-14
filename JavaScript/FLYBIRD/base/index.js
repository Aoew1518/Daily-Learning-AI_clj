//对象
var obj={
    name:'冷少',
    age:18,
    girlFriend:'高圆圆',
    health:100,
    smoke:function(){
        console.log('i am smoke,cool!');
        obj.health=obj.health-1
    },
    drink:function(){
        console.log('it is cool!');
        obj.health++
    }
}

obj.girlFriend='刘亦菲'
delete obj.girlFriend

obj.smoke()
obj.drink()
console.log(obj)