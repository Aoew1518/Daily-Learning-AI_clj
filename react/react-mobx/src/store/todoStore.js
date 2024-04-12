import { makeAutoObservable } from "mobx"

class TodoStore {
  list = [
    {id: 1, name: '学习react', isDone: true},
    {id: 2, name: '学习mobx', isDone: false},
  ]
  constructor() {
    makeAutoObservable(this)
  }
  // 点击完成按钮时改变仓库list中对应数据的isDone
  changeIsDone(index) {
    this.list[index].isDone = !this.list[index].isDone
  }
  // 点击输入按钮时添加仓库list中
  addItem(name) {
    this.list.push({id: this.list.length + 1, name, isDone: true})
  }
  // 点击删除
  deleteItem(index){
    this.list.splice(index, 1)
    console.log(this.list)
  }
}

const TodoStoreChange = new TodoStore()

export default TodoStoreChange