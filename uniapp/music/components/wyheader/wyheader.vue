<template>
	<view class="header">
		<uni-icons type="bars" size="24"></uni-icons>
		
		<view class="content">
			<!-- 添加一个插槽 -->
			<slot name="content"></slot>
		</view>
		
		<uni-icons type="mic" size="24"></uni-icons>
		<!-- <uni-icons type="plus-filled" size="24"></uni-icons> -->
		
	</view>
</template>

<script>
	export default {
		name:"wyheader",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.header{
	height: 100rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 15rpx;
}
</style>