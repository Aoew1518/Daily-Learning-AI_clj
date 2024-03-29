<template>
    <!-- 返回 -->
    <Back :title="'笔记详情'" />
    
    <div class="note-detail">
        <div class="note-img">
            <img :src="noteDetail.head_img" alt="">
        </div>

        <div class="note-content">
            <div class="tab">
            <span class="note_type">{{noteDetail.note_type}}</span>
            <span class="author">{{noteDetail.nickname}}</span>
            </div>
            <p class="title">{{noteDetail.title}}</p>
            <div class="content" v-html="noteDetail.note_content"></div>
        </div>

        <div class="edit" @click="goEdit">
          <van-icon name="records-o" size="30" />
        </div>
    </div>
</template>



<script setup>
import axios from '@/api/index.js'
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()
const noteDetail = ref({})

// get 请求要用params对象包裹
onMounted(async() => {
    const res = await axios.get('/findNoteDetailById', {
        params: {
            id: route.query.id
        }
    })
    // console.log(res)
    noteDetail.value = res.data
})

const goEdit = () => {
  // 跳转到编辑页面
  router.push({ path: '/notePublish', query: { id: route.query.id }})
}

</script>

<style lang="less" scoped>
.note-detail {
  .note-img {
    width: 100%;
    height: 5rem;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .note-content {
    padding: 0.667rem;

    .tab {
      display: flex;
      justify-content: space-between;
      color: rgba(16, 16, 16, 0.7);
      font-size: 0.48rem;

      span {
        padding-bottom: 4px;
        border-bottom: 2px solid #e51c23;
      }
    }

    .title {
      margin: .5333rem 0;
      line-height: 1.3;
      color: rgba(16, 16, 16, 1);
      font-size: 0.8rem;
    }

    .content {
      line-height: 1.5;
      color: rgba(16, 16, 16, 1);
      font-size: 0.3733rem;
    }
  }

  .edit{
    position: fixed;
    right: 10px;
    bottom: 50px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(16, 16, 16, 0.3);
    box-shadow: 0 0 5px #aaa;
    text-align: center;
    line-height: 55px;
  }
}
</style>