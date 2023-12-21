<template>
  <div class="head">
    <input type="text" v-model="message">
    <button @click="submit">确定</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
    export default {
     data(){
        return{
            message:''
        }
     },
     methods:{
        ...mapMutations(['addLists']),
         submit(){
            if (this.message)
            this.addLists(this.message)
            this.message=''
         }
     }
    }
</script>

<style lang="css" scoped>

</style>