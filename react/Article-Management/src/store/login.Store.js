import { makeAutoObservable } from 'mobx'
import { http, setToken } from '@/utils'

class LoginStore {
    token = ''

    constructor() {
        makeAutoObservable(this)
    }
    
    async login({username, password}){
        // 登录
        const res = await http.post('/authorizations', {
            mobile: username,
            code: password
        })
        console.log(res)
        this.token = res.data.token
        setToken(res.data.token)
    }
}

export default LoginStore