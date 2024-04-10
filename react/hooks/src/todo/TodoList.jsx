import React, { useState, useRef } from 'react';
import TotoItem from './TotoItem'
import { Input, Button } from 'antd';

// 父组件
const TodoList = () => {
  const [data, setData] = useState([
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ]);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef();

  // 获取输入框的值并且存进data中
  const onSubmit = () => {
    // 方法一，通过ref获取input的值
    // if (inputRef.current.input.value.trim() === '') return
    // setData([...data, inputRef.current.input.value]);
    // // console.log(inputRef.current.input.value, data);
    // setInputValue('');

    // 方法二，通过e.target.value获取input的值
    if (inputValue.trim() === '') return
    setData([...data, inputValue]);
    setInputValue('');
  }

  // 更新输入框中inputValue状态
  const handleChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };

  // 根据index删除data中的内容
  const handleDelete = (index) => {
    // const newData = [...data];
    // newData.splice(index, 1);
    // setData(newData);
    // console.log(index, data);

    setData(data.filter((item , i) => i !== index));
  }

  return (
    <div style={{ width: '400px' }}>

      <header style={{ display: 'flex' }}>
        <Input placeholder="Basic usage" ref={inputRef} value={inputValue} onChange={handleChange} />
        <Button onClick={onSubmit}>提交</Button>
      </header>

      <section>
        <TotoItem data={data} onDelete={handleDelete}></TotoItem>
      </section>

    </div>
  );
};

export default TodoList;
