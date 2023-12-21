import {createStore} from  'vuex'

const store = createStore({
    state(){ //data 数据源 公共数据源
        return {
            lists:['html','css','js']
        }
    },
    mutations:{ //修改数据的方法methods
        addLists(state,msg){ //mutations中定义的方法，形参state代表着state(){}数据源
            state.lists.push(msg)
        }

    }
})

// 抛出store
export default store