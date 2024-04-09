import React, { Component, createRef } from 'react';

class Lift extends Component {
    constructor() {
        super();
        // console.log('Lift 组件开始加载');
        this.state = {
            count: 0
        };
        this.ref = createRef();
    }

    handleClick() {
        this.setState({
            count: this.state.count + 1
        })
        // this.state.count++;
        // this.forceUpdate();
    }

    shouldComponentUpdate() {
        console.log('Lift 组件开始更新');
    }

    componentDidMount() {
        console.log('Lift 组件挂载完成', this.ref.current);
    }

    componentDidUpdate() {
        console.log('Lift 组件更新完成', this.ref.current);
    }

    render() {
        console.log('Lift 组件开始编译');
        return (
            <div>
                <h4 ref={this.ref} onClick={()=> this.handleClick() } >{this.state.count}</h4>
            </div>
        );
    }
}

export default Lift;