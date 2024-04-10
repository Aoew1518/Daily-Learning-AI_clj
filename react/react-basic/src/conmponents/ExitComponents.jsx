import React, { useState } from 'react';

const ExitComponents = props => {
    const [list, setList] = useState([
        { id: 1, name: '张三' },
        { id: 2, name: '李四' },
    ])

    const onDel = (id) => {
        console.log(id);
        setList(list.filter(item => item.id !== id))
    }

    return (
        <div>
            <p>这是一个额外的组件</p>
            <ul>
                {
                    list.map(item =>
                        <li key={item.id}>
                            <span>{item.name}</span>
                            <button onClick={() => onDel(item.id)}>x</button>
                        </li>)
                }
            </ul>
        </div>
    );
};

export default ExitComponents;