import React, { Component, createRef } from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  state = {
    list: ['html', 'css'],
    inputValue: ''
  }

  inputRef = createRef();

  handleInputChange = (e) => {
    // console.log(e.target.value);
    this.setState({ inputValue: e.target.value });
  };

  handleClick = () => {
    if (this.state.inputValue.trim() === '') return;
    this.setState({
      // list: [...this.state.list, this.state.inputValue]
      list: [...this.state.list, this.inputRef.current.value]
    })
    // 第二种方法
    // this.state.list.push(this.state.inputValue);
    // this.forceUpdate();
    // console.log(this.state.list);
    this.setState({ inputValue: '' });
  }

  handleDeleteItem = (index) => {
    this.setState({
      list: this.state.list.filter((item, i) => i !== index)
    })
  }

  render() {
    return (
      <div>
        <header>
          <input type="text" onChange={this.handleInputChange} value={this.state.inputValue} ref={this.inputRef}/>
          <button onClick={()=> this.handleClick()}>提交</button>
        </header>
        <section>
          <TodoItem list={this.state.list} onDelete={this.handleDeleteItem} />
        </section>
      </div>
    )
  }
}