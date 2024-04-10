import React, { useEffect, useRef } from 'react';

const Ref = () => {
    const h2Ref = useRef(null);  // 得到一个可以存放dom结构对象

    useEffect(() => {
        console.log(h2Ref);
    }, []) // 依赖项为空，表示只执行一次

    return (
        <div>
            <h2 ref={h2Ref}>Ref</h2>
        </div>
    );
};

export default Ref;