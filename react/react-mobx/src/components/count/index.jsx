import React from 'react';
import counterStore from '../../store/counterStore';
import { observer } from 'mobx-react-lite';

const Count = () => {
    // console.log(counterStore.counter);
    return (
        <div>
            <button onClick={() => {counterStore.addCount()}}>{counterStore.counter}</button>
            <ul>
                {counterStore.newList.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
            <button onClick={counterStore.pushList}>push</button>
        </div>
    );
};

export default observer(Count);  // observer 监听数据变化