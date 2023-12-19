<template>
  <div>
    <h2>沸点页面</h2>

    <button @click="goClassPage">去课程页面</button>
      
  </div>
</template>

<script>

export default {
  methods: {
    goClassPage() {
      // this.$router.push('/class')
      // this.$router.push({path: '/class', query: {id: 123, name: 'Tom' }})
      this.$router.push({ name: 'class', params: { id: 456, name: 'Tom'}})
    }
  }
}
</script>

<style lang="css" scoped>

</style>