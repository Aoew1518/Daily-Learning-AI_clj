<script setup>
// 数据驱动 menus 状态 active :class="active"  ?
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const router = useRouter(); // 得到路由总管对象
const menus = [{
    name: '在线音乐',
    menus: [
        {
            name: '推荐',
            key: 'discover'
        },
        {
            name: '音乐馆',
            key: 'music'
        },
        {
            name: '视频',
            key: 'video'
        },
        {
            name: '电台',
            key: 'dj'
        }
    ]
}, {
    name: '我的音乐',
    menus: [
        {
            name: '我喜欢',
            key: 'love'
        },
        {
            name: '本地歌曲',
            key: 'local'
        },
        {
            name: '下载歌曲',
            key: 'download'
        },
        {
            name: '最近播放',
            key: 'recently'
        }
    ]
}];
// 当前路由？ 
const route = useRoute();
const currentKey = ref(route.meta.menu);
const changeMenu = (menu) => {
    currentKey.value = menu.key
    router.push({ name: menu.key, replace: true})
}
</script>

<template>
<div 
    class="mt-10 pl-6 pr-6 space-y-1.5"
    v-for="menuItem in menus"
>
    <div class="menu-title text-main">
    {{ menuItem.name }}
    </div>
    <div 
        class="menu-item hover-bg-main text-main"
        v-for="menu in menuItem.menus"
        :key="menu.key"
        :class="{'active': currentKey === menu.key}"
        @click="changeMenu(menu)"
    >
        <span class="ml-1">{{ menu.name }}</span>
    </div>
</div>
</template>

<style scoped>
.menu-title {
    @apply text-xs pl-4 pr-4 pb-2;
}
.menu-item {
    @apply text-sm pl-4 pr-4 pt-1.5 pb-1.5 rounded cursor-pointer transition-colors flex items-center;
}
.active {
    @apply bg-gradient-to-r from-teal-400 to-emerald-400 text-slate-500 cursor-default
}
</style>
