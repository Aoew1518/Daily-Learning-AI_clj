<template>
    <section>
        <header class="top_tips">
            <span class="num_tip" v-if="parentCompoent === 'home'">第一周</span>
            <span class="num_tip" v-if="parentCompoent === 'item'">题目一</span>
        </header>

        <!-- home -->
        <div v-if="parentCompoent === 'home'">
            <div class="home_logo item_container_style"></div>
            <router-link to="/item" class="start button_style"></router-link>
        </div>

        <!-- item -->
        <div v-if="parentCompoent === 'item'">
            <div class="item_back item_container_style">
                <div class="item_list_container">
                    <header class="item_title">{{ questions[0].title }}</header>
                    <ul>
                        <li class="item_list" v-for="(item, index) in questions[0].answers" :key="index">
                            <span class="option_style">{{ chooseType(index) }}</span>
                            <span class="option_detail">{{ item }}</span>
                        </li>
                        <!-- <li class="item_list">
                            <span class="option_style">A</span>
                            <span class="option_detail">答案一</span>
                        </li>
                        <li class="item_list">
                            <span class="option_style">A</span>
                            <span class="option_detail">答案一</span>
                        </li>
                        <li class="item_list">
                            <span class="option_style">A</span>
                            <span class="option_detail">答案一</span>
                        </li> -->
                    </ul>
                </div>
            </div>
            <span class="next_item button_style"></span>
        </div>


    </section>
</template>

<script>
export default {
    props: ['parentCompoent'],
    data() {
        return {
            questions: [
                { id: 1, title: '题目一', answers: ['答案1', '答案2', '答案3', '答案4'] },
                { id: 2, title: '题目二', answers: ['答案1', '答案2', '答案3', '答案4'] },
                { id: 3, title: '题目三', answers: ['答案1', '答案2', '答案3', '答案4'] },
                { id: 4, title: '题目四', answers: ['答案1', '答案2', '答案3', '答案4'] },
                { id: 5, title: '题目五', answers: ['答案1', '答案2', '答案3', '答案4'] },
            ]
        }
    },
    methods: {
        chooseType(index) {
            if (index == 0)
                return 'A'
            else if (index == 1)
                return 'B'
            else if (index == 2)
                return 'C'
            else
                return 'D'
        }
    }
}
</script>

<style lang="less" scoped>
.top_tips {
    position: absolute;
    right: 1.6rem;
    top: -1.3rem;
    width: 3.25rem;
    height: 7.35rem;
    background: url('../assets/images/WechatIMG2.png') no-repeat;
    background-size: 100% 100%;
}

.num_tip {
    position: absolute;
    left: 0.48rem;
    bottom: 1.1rem;
    width: 2.5rem;
    height: 0.7rem;
    font-family: '黑体';
    font-weight: 600;
    color: #a57c50;
    font-size: 0.6rem;
    text-align: center;
}

.item_container_style {
    width: 13.15rem;
    height: 11.625rem;
    position: absolute;
    top: 4.1rem;
    left: 1rem;
    background-repeat: no-repeat;
}

.home_logo {
    background-image: url('../assets/images/1-2.png');
    background-size: 13.142rem 100%;
}

.button_style {
    width: 4.35rem;
    height: 2.1rem;
    position: absolute;
    top: 16.5rem;
    left: 50%;
    margin-left: -2.175rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.start {
    background-image: url('../assets/images/1-4.png');
}

.item_back {
    background-image: url('../assets/images/2-1.png');
    background-size: 100% 100%;
}

.item_list_container {
    position: absolute;
    width: 8rem;
    top: 2.4rem;
    left: 3rem;
}

.item_title {
    font-size: 0.65rem;
    color: #fff;
    line-height: 0.7rem;
}

.item_list {
    width: 10rem;

    span {
        color: #fff;
        font-size: 0.6rem;
        display: inline-block;
    }

    .option_style {
        width: 0.725rem;
        height: 0.725rem;
        border: 1px solid #fff;
        border-radius: 50%;
        font-size: 0.5rem;
        line-height: 0.725rem;
        text-align: center;
        font-family: 'Arial';
        margin-right: 0.3rem;
    }
}

.next_item {
    background-image: url('../assets/images/2-2.png');
}
</style>