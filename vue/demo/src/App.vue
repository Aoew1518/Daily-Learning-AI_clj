<template>
  <div class="todo">
    <input type="text" v-model="content">   <!-- v-model 会把input框中的内容双向绑定到content -->
    <button @click="add">添加</button>

    <!-- <div class="list">
      <ul>
        <li v-for="(item,index) in todos" :key="index">{{item}}</li>
      </ul>
    </div> -->

  <!-- List.vue -->

    <List :lists="todos"></List>

  </div>
</template>

<script>
import List from './components/List.vue'
  export default {
    components: {
      List: List
    },
    data() {
      return {
        content: '',
        todos: ['html','css','javascript']
      }
    },
    methods:{
      add() {
        this.todos.push(this.content);
        console.log(this.content);
      }
    }
  }
</script>

<style lang="css">
  *{
    margin: 0;
    padding: 0;
  }
  #app{
    text-align: center;
    font-size: 30px;
  }
  .todo{
    width: 300px;
    margin: 0 auto;
  }
  input{
    padding: 5px 10px;

  }
  button{
    padding: 5px 10px;
  }
  li{
    list-style: none;
    background-color: aliceblue;
    margin-top: 10px;
  }
</style>