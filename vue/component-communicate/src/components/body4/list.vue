<template>
  <div class="body">
    <ul>
      <li v-for="(item,index) in lists">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        computed:{
            ...mapState(['lists'])
        }
    }
</script>

<style lang="css" scoped>

</style>