<template>
  <div class="note-class-wrapper">
    <div class="note-class">
      <header>
        <!-- 头部 -->
        <div>
          <!-- <van-icon name="wap-nav" @click="" /> -->
          <van-icon name="contact-o" />
          <!-- <van-icon name="search" @click="" /> -->
          <van-search
            v-model="value"
            placeholder="请输入搜索关键词"
            input-align="center"
          />
        </div>

        <div class="header-right">
          <!-- <van-icon name="edit" @click="goPublish" /> -->
          <van-icon name="add-o" @click="goPublish"/>
          <van-icon name="star-o"  @click=""/>
          <van-icon name="scan" />
        </div>
      </header>

      <section>
        <!-- 段落 -->
        <div
          class="note-item"
          v-for="(item, index) in noteClassList"
          :key="index"
          :style="`background-color: ${item.bgColor}`"
          @click="goNoteList(item.title)"
        >
          <span class="title">{{ item.title }}</span>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "@/api";
import Back from "@/components/Back.vue";

const router = useRouter();

const noteClassList = [
  { bgColor: "#FFA07A", title: "美食" },
  { bgColor: "#FF6B81", title: "住宿" },
  { bgColor: "#00FFB9", title: "日常" },
  { bgColor: "#2ECC71", title: "旅游" },
  { bgColor: "#D1BDE1 ", title: "娱乐" },
  { bgColor: "#D9BDE9", title: "购物" },
  { bgColor: "#87CEEB", title: "学习" },
  { bgColor: "#4A90E2", title: "工作" }
];

const goNoteList = (title) => {
  // 第一种path路由传参
  router.push({ path: "/noteList", query: { title: title } });

  // 第二种name路由传参，params 参数看不见
  // router.push({ name: 'noteList', params: {title: title}})
};

const goPublish = () => {
  router.push({ path: "/notePublish" });
};
</script>

<style lang="less" scoped>
.note-class-wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  .note-class {
    position: absolute;
    transform: translateX(0);
    width: 100%;
    height: 100%;
    padding: 0 0.5866rem;
    box-sizing: border-box;
    overflow-y: scroll;
    transition: transform 0.3s;

    &.hide {
      transform: translateX(100%);
    }

    header {
      display: flex;
      justify-content: space-between;
      height: 1.2rem;
      line-height: 1.2rem;
      margin: 10px 0;

      .van-icon {
        margin-left: 10px;
        font-size: 20px;
      }
    }

    section {
      width: 100%;

      .note-item {
        float: left;
        width: 4rem;
        height: 3.2rem;
        border-radius: 0.3rem;
        margin-left: 0.4rem;
        margin-bottom: 0.64rem;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        box-shadow: 0 0 10px 2px #ccc;
        overflow: hidden;

        .title {
          color: #fff;
          font-size: 0.5333rem;
          text-align: center;
          display: block;
          margin-top: 0.5333rem;
        }
      }
    }
  }

  .menu {
    width: 100%;
    height: 100vh;
    position: absolute;
    transform: translateX(-100%);
    transition: transform 0.3s;

    &.active {
      transform: translateX(0%);
    }
  }
}
</style>
<style>
.van-search {
  position: absolute;
  top: 0.3rem;
  left: 1.4rem;
  width: 60%;
  height: 0.8533rem;
}
</style>
