import React, { useState } from 'react';

const State = () => {
    let [count, setCount] = useState(0); // [xx, xxfn]
    const [title, setTitle] = useState('hello');
    const num = 1
    if(num){
        var [flag, setFlag] = useState("true");
    }

    const add = () => {
        setCount(count + 1);
        setTitle(title + count)
    }

    return (
        <div>
            <h4>{title}</h4>
            <button onClick={() => add()}>{count}</button>
            <h3>{flag}</h3>
        </div>
    );
};

export default State;