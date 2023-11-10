// 类和对象有什么区别，类时抽象的，定制，对象是具体的

class SingleDog {
    constructor() {

    }
    // static instance = null
    // 属于类上的方法
    static getInstance() {
        // console.log('类的方法')
        if (!SingleDog.instance) {
            // 仅实例化一次
            SingleDog.instance = new SingleDog()
        }
        return SingleDog.instance
    }
    // 公有方法 属于实例上的
    show() {
        console.log('单身贵族')
    }
}
// 设计模式，一个类只实例化一次
const s1 = SingleDog.getInstance()//生成对象 -> 拿到对象
const s2 = SingleDog.getInstance()
console.log(s1 == s2)//False内存中不一样
console.log(SingleDog.getInstance())