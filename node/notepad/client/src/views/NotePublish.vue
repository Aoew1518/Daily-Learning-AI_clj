<template>
  <Back :title="'笔记编辑'" />
  <div class="note-cell">
    <van-field v-model="state.title" label="标题" placeholder="请输入标题" />
  </div>
  <div class="note-publish">
    <div class="editor">
      <QuillEditor
        theme="snow"
        placeholder="请输入笔记内容"
        v-model:content="state.content"
        contentType="html"
      />
    </div>

    <div class="note-wrap">
      <div class="note-cell">
        <van-field label="图片上传">
          <template #input>
            <van-uploader
              v-model="state.picture"
              multiple
              max-count="1"
              :after-read="afterRead"
            />
          </template>
        </van-field>
      </div>

      <div class="note-cell">
        <div class="sort">
          <span>选择分类</span>
          <span @click="() => (show = true)">
            {{ state.note_type }} <van-icon name="arrow"
          /></span>
        </div>

        <van-action-sheet
          v-model:show="show"
          :actions="actions"
          @select="onSelect"
        />
      </div>
    </div>

    <div class="btn">
      <van-button type="primary" block @click="publish">发布笔记</van-button>
    </div>
  </div>
</template>

<script setup>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { reactive, ref, onMounted } from "vue";
import axios from "@/api";
import { useRouter, useRoute } from "vue-router";
// import { Back } from '@/components/Back.vue'

const router = useRouter();

const show = ref(false);
const actions = [
  { name: "美食" },
  { name: "住宿" },
  { name: "日常" },
  { name: "旅游" },
  { name: "娱乐" },
  { name: "购物" },
  { name: "学习" },
  { name: "工作" },
];

const state = reactive({
  content: "",
  title: "",
  picture: [],
  note_type: "美食",
});

// 验证是否可以获取图片地址
// const afterRead = (file, detail) => {
//   // console.log(file, detail);
//   console.log(state.picture);
// }

const onSelect = (item) => {
  state.note_type = item.name;
  show.value = false;
};

const publish = async () => {
  if (!state.title || !state.content) {
    showFailToast("标题或内容不能为空");
    return;
  }

  const { id, nickname } = JSON.parse(localStorage.getItem("userInfo"));
  const res = await axios.post("/notePublish", {
    title: state.title,
    note_type: state.note_type,
    head_img: (state.picture.length && state.picture[0].content) || "",
    note_content: state.content,
    userId: id,
    nickname: nickname,
    id: route.query.id || "",
  });
  if (id) {
    showSuccessToast("修改成功");
  } else {
    showSuccessToast(res.msg);
  }

  setTimeout(() => {
    // router.push({ path: '/noteList', query: { title: state.note_type }})
    router.push({ path: "/noteClass" });
  }, 1500);
};

// -------- edit------------------------------------------------
const route = useRoute();

onMounted(async () => {
  const res = await axios.get("/findNoteDetailById", {
    params: {
      id: route.query.id,
    },
  });
  state.content = res.data.note_content;
  state.title = res.data.title;
  state.picture.push({
    content: res.data.head_img,
    objectUrl: res.data.head_img,
  });
  state.note_type = res.data.note_type;
});
</script>

<style lang="less" scoped>
:deep(.ql-container.ql-snow) {
  height: 200px;
}
.note-cell {
      border-bottom: 1px solid #d1d5db;
    }
.note-publish {
  min-height: 100vh;
  position: relative;
  padding-bottom: 2rem;
  box-sizing: border-box;
  .note-wrap {
    margin-top: 20px;

      .sort {
        display: flex;
        justify-content: space-between;
        padding: 10px 16px;
        color: #323233;
        font-size: 14px;
      }
    
  }
  .btn {
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
  }
}
</style>
