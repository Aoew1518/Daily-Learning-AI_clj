<template>
    <div>
        <h2>当前得分：{{ score }}</h2>
    </div>
</template>
  
<script>
import { mapState, mapGetters } from 'vuex'
export default {
    data() {
        return {
            score: 0
        }
    },
    computed: {
        ...mapState(['answerId']),
        ...mapGetters(['rightAnswer'])
    },
    created() {
        console.log(this.answerId);
        console.log(this.rightAnswer);

        let every = 100 / this.rightAnswer.length
        this.rightAnswer.forEach((item, index) => {
            if (item === this.answerId[index]) {
                this.score += every
            }
        });
    }
}
</script>
  
<style lang="less" scoped>
h2 {
    color: #fff;
}
</style>