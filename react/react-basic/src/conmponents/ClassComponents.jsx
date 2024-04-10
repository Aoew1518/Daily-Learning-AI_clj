import React, { Component } from 'react';


class ClassComponents extends Component {
    constructor(props) {
        super(props);
        this.list = [
            { id: 1, name: '张三' },
            { id: 2, name: '李四' },
        ]
    }

    onDel(id) {
        // 方法一：forceUpdate
        // const newList = this.list.filter(item => item.id !== id);
        // this.list = newList;
        // this.forceUpdate();

        // 方法二：setState
        this.list = this.list.filter(item => item.id !== id);
        this.setState({
            list: this.list
        })

        console.log(id);
    }

    render() {
        return (
            <div>
                <p>这是一个类组件</p>
                <ul>
                    {
                        this.list.map((item, index) => {
                            return <li key={index}>
                                <span>{item.name}</span>
                                <button onClick={() => this.onDel(item.id)}>x</button>
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}



export default ClassComponents;