<template>
	<view class="">
		我的页面
		<button @click="sendSocketMessage">发送socket消息</button>
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
		sendSocketMessage() {
			this.send()
		},
		send() {
			uni.sendSocketMessage({
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
			    console.log('收到服务器内容：' + res.data);
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
