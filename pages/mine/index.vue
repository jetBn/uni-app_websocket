<template>
	<view class="">
		我的页面
		<button @click="sendSocketMessage">发送socket消息</button>
		<button @click="toSubPageHandle">跳子页面</button>
	</view>
</template>

<script>
import store from '../../store/index.js'
export default {
	data() {
		return {
			
		}
	},
	methods: {
		toSubPageHandle() {
			uni.navigateTo({
				url:'/pages/sub_page/index'
			})
		},
		sendSocketMessage() {
			this.send()
		},
		send() {
			store.state.wsInstance({
				data: 'from ' + 'platform' + ' : ' + parseInt(Math.random() * 10000).toString(),
				success(res) {
					console.log(res);
				},
				fail(err) {
					console.log(err);
				}
			})
		},
		onReceivedWs() {
			
			// uni.onSocketMessage((res) => {
			// 	console.log('onMessage in minexxx', res)
			// })
			store.state.wsInstance.onMessage((res)=> {
			    console.log('收到服务器内容 in mine page：' + res.data);
			})
		}
	},
	onShow() {
		// uni.onSocketMessage((res) => {
		// 	console.log('onMessage in mine', res)
		// })
		this.onReceivedWs()
	}
}
</script>

<style>
</style>
