import React, { useState } from 'react';

const State2 = (props) => {
    const [n] = useState(()=>{
        return 2;
    });

    const [count, setCount] = useState(()=>{
        return props.num * 2;
    });

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    );
};

export default State2;