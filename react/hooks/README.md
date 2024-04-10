# Hooks
 - 让函数组件变得更加强大的钩子
 - hooks 只能在函数组件中使用

1. useState() 为函数组件引入状态
2. useEffect() 处理副作用,默认会执行一次,当组件中有状态变更导致组件重新渲染，该函数会重新执行
    1) 可以充当 componentDidMount()   挂载的功能
    2) 可以充当 componentDidUpdate()  更新的功能
    3) 可以充当componentWillUnmount() 销毁的功能

3. useRef() 在函数组件中获取DOM元素
4. useContext() createContext() 创建全局的上下文对象，用于父组件提供数据，子组件通过useContext() 获取数据
