import React from 'react';
import ExitComponents from './conmponents/ExitComponents';
import ClassComponents from './conmponents/ClassComponents';

function HelloReact() {
    const handler = (e) => {
        console.log('clicked', e);
    }

    return <div>
        <p>这是一个函数组件</p>
        <button onClick={handler}>click me</button>
    </div>
}


class HelloVue extends React.Component {
    render() {
        return <h1>这是一个类组件</h1>;
    }
}

function App() {
    return (
        <div className="app">
            <HelloReact></HelloReact>
            <HelloVue></HelloVue>
            <hr />
            <ExitComponents></ExitComponents>
            <ClassComponents></ClassComponents>
        </div>
    );
};

export default App;