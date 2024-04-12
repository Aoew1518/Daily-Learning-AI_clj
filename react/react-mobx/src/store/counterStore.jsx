import { makeAutoObservable } from 'mobx'

class CounterStore {
    counter = 0
    list = [1, 2, 3, 4, 5, 6]

    constructor() {
        makeAutoObservable(this)  // 当类中的属性值变更，就会触发组件更新
    }

    addCount = () => {
        this.counter += 1
    }

    pushList = () => {
        this.list.push(7, 8)
    }

    get newList(){
        return this.list.map(item => item = item * 10 )
    }
}

const counter = new CounterStore()

export default counter