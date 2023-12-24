import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    questionList: [],//存数据
    itemNum: 1,//第几题
    answerId: [] //存放答案
  },
  getters: {
    rightAnswer(state) {
      let arr = []
      for (let question of state.questionList) {
        for (let answer of question.topic_answer) {
          if (answer.is_standard_answer === 1) {
            arr.push(answer.topic_answer_id)
          }
        }
      }
      return arr
    }
  },
  mutations: {
    getQuestionList(state, list) { //所有写在mutations中的函数的第一个参数都是state
      state.questionList = list
    },
    nextItem(state) { //题目序号+1
      state.itemNum += 1
    },
    saveAnswer(state, id) { //保存答案
      state.answerId.push(id)
    }
  },
  actions: { //methods async 放异步代码
    getQuestionListAction(context) {//所有写在actions中的函数的第一个参数都是context,代表上下文
      axios.get('https://www.fastmock.site/mock/3a33c631bcba043a378b4ceafbf994b8/question/questions')
        .then(res => {
          console.log(res.data)
          context.commit('getQuestionList', res.data) //触发后调用getQuestionList后list=res.data
        })
    },
    nextItemAction({ commit, state }, id) { //解构
      if (state.itemNum < state.questionList.length) {
        commit('nextItem')//点击更新数据
      }
      commit('saveAnswer', id)//点击保存答案
    }
  },
  modules: {
  }
})
