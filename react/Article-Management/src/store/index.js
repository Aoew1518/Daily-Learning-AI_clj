import React from 'react'
import LoginStore from './login.Store.js'

// 先实例化对象
class RootStore {
    constructor() {
        this.loginStore = new LoginStore(this)
    }
}

// 创建上下文对象
const Context = React.createContext(new RootStore())

export const useStore = () => React.useContext(Context)