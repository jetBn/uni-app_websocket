<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<button @click="sendSocketMessage">发送socket消息</button>
	</view>
</template>

<script>
let platform = uni.getSystemInfoSync().platform
import { connectWsTest, connectWs } from '../../utils/utils.js'
export default {
	data() {
		return {
			title: 'Hello'
		}
	},
	onLoad() {
		connectWs()
	},
	methods: {
		sendSocketMessage() {
			this.send()
		},
		send() {
			uni.sendSocketMessage({
				data: 'from ' + platform + ' : ' + parseInt(Math.random() * 10000).toString(),
				success(res) {
					console.log(res);
				},
				fail(err) {
					console.log(err);
				}
			})
		}
	},
	onShow() {
		console.log('onShow')
		
	}
}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
