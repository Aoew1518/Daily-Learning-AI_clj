<template>
    <div>
        <ul>
            <li v-for="banner in banners">
                <img :src="banner.pic" alt="">
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useBannerStore } from '../store/banner'
import { defineProps,onMounted,toRefs } from 'vue';
const props = defineProps({
    'per-page': {
        type: Number,
        default:10
    }
})
// 借pinia store banner 来到本地组件
const {banners}  = toRefs(useBannerStore());
const {getBanners} = useBannerStore()

onMounted(async() => {
    // 先让组件显示出来，用户的第一眼要快
    // 等组件显示了，再去请求数据，因为js是单线程
    // const data = await getBannerData(); // 应该属于store，而不是写在这里
    // console.log(data)
    await getBanners() // action
    // console.log(banners);
})
</script>

<style scoped>

</style>