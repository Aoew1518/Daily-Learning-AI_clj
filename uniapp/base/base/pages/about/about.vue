<template>
	<view class="btn">
		about page
		<button type="default">按钮</button>
		<view class="iconfont icon-yinle"></view>
	</view>
</template>

<script  setup>
import { onMounted } from 'vue';
const reqTask= onMounted(  ()=>{
   uni.request({
	url:'https://mock.mengxuegu.com/mock/65a91543c4cd67421b34c898/movie/movieList',
	method: 'GET',
	success:(res)=>{
		console.log(res)
		
		uni.setStorage({
			key:'moviceName',
			data: res.data.moviceList,
			success() {
				uni.showToast({
					title: '保存成功',
					duration: 2000,
					icon: 'success'
				});

			}
		})
	}
   })
   // reqTask.abort();
})
</script>

<style lang="scss">
.btn{
	button{
		width: 750rpx; // rpx是根据屏幕宽度指定的响应式单位
	}
}
</style>
