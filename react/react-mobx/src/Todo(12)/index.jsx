import React, { useState } from 'react';
import './index.css'
import TodoStoreChange from '../store/todoStore'
import { observer } from "mobx-react-lite";

const Todo = () => {
  // console.log(TodoStoreChange.list)

  // 获取输入框的值
  const [InputValue, setInputValue] = useState('')
  // 勾选按钮
  const changeItem = (index) => {
    TodoStoreChange.changeIsDone(index)
  }
  // 输入框的值改变时触发
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
    // console.log(e.target.value)
  }
  // 点击删除列表内容
  const handleEnterKey = (e) => {
    if (e.key === 'Enter' && InputValue.trim() !== '') {
      // 按下回车键时触发
      console.log('回车键被按下')
      TodoStoreChange.addItem(InputValue)
      setInputValue('')
    }
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          autoFocus
          autoComplete="off"
          placeholder="What needs to be done?"
          value={InputValue}
          onChange={(e) => {
            handleInputChange(e)
          }}
          onKeyDown={(e) => handleEnterKey(e)} // 监听回车键按下事件
        />
      </header>

      <section className="main">
        {/* 全选 */}
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
        />
        <label htmlFor="toggle-all"></label>
        {/* 渲染列表 */}
        <ul className="todo-list">
          {/* 遍历todoStore中的数据 */}
          {
            TodoStoreChange.list.map((item, index) => {
              return (
                <li className={ item.isDone ? 'todo' : 'todo completed'} key={item.id}>
                  <div className="view">
                    <input className="toggle" type="checkbox" defaultChecked={!item.isDone} onClick={() => changeItem(index)} />
                    <label >{item.name}</label>
                    <button className="destroy" onClick={() => TodoStoreChange.deleteItem(index)}></button>
                  </div>
                </li>

              )
            })}
        </ul>
      </section>
    </section>
  );
};

export default observer(Todo);