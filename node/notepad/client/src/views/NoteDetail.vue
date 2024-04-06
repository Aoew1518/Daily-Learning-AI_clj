<template>
  <van-nav-bar
    title="笔记详情"
    left-text="返回"
    right-text="设置"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
    fixed="true"
  />

  <div class="back"></div>

  <van-action-sheet
    v-model:show="show"
    :actions="actions"
    cancel-text="取消"
    close-on-click-action
    @select="onSelect"
    @cancel="onCancel"
  />

  <div class="note-detail">
    <div class="note-img">
      <img :src="noteDetail.head_img" alt="" />
    </div>

    <div class="note-content">
      <div class="tab">
        <span class="note_type">{{ noteDetail.note_type }}</span>
        <span class="author">{{ noteDetail.nickname }}</span>
      </div>
      <p class="title">{{ noteDetail.title }}</p>
      <div class="content" v-html="noteDetail.note_content"></div>
    </div>

    <div class="edit" @click="goEdit">
      <van-icon name="records-o" size="30" />
    </div>
  </div>
</template>

<script setup>
import axios from "@/api/index.js";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const noteDetail = ref({});

const onClickLeft = () => history.back();
const onClickRight = () => {
  show.value = true;
};

const show = ref(false);
const actions = [{ name: "分享" }, { name: "删除" }];
// 分享和删除选择
const onSelect = async (item) => {
  if (item.name === "删除") {
    await deleteNoteDetailById();
  } else if (item.name === "分享") {
    showSuccessToast("分享成功！")
  }
};

// post 发送请求来删除当前id下的文章内容
const deleteNoteDetailById = async () => {
  const res = await axios.post("/noteDelete", {
    id: route.query.id,
  });
  if (res.data) {
    // 删除成功后执行跳转到上一级内容
    showSuccessToast("删除成功！")
    setTimeout(() => {
      router.go(-1);
    }, 1000);
  }else {
    showFailToast("删除失败！")
  }
};

// get 请求要用params对象包裹
onMounted(async () => {
  const res = await axios.get("/findNoteDetailById", {
    params: {
      id: route.query.id,
    },
  });
  noteDetail.value = res.data;
});

const goEdit = () => {
  // 跳转到编辑页面
  router.push({ path: "/notePublish", query: { id: route.query.id } });
};
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
      margin: 0.5333rem 0;
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

  .edit {
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

.back {
  position: relative;
  width: 100%;
  height: 46px;
}
</style>
