<template>
	<view>
		<view class="txt">{{txt}}</view>
		<button @click="send">发送socket消息</button>
	</view>
</template>

<script>
import store from '../../store/index.js'
export default {
	data () {
		return {
			txt:'test'
		}
	},
	watch:{
		txt(n, o) {
			console.log(n, o)
		}
	},
	methods: {
		onReceivedWs() {
			
			// uni.onSocketMessage((res) => {
			// 	console.log('onMessage in minexxx', res)
			// })
			const that = this
			store.state.wsInstance.onMessage((res)=> {
			    console.log('收到服务器内容 in sub page：' + res.data);
				that.txt = '454545'
			})
		},
		send() {
			store.state.wsInstance.send({
				data: 'from ' + 'platform' + ' : ' + parseInt(Math.random() * 10000).toString(),
				success(res) {
					console.log(res);
				},
				fail(err) {
					console.log(err);
				}
			})
		},
	},
	onShow() {
		// uni.onSocketMessage((res) => {
		// 	console.log('onMessage in mine', res)
		// })
		if(!store.state.isSubPageListen) {
			this.onReceivedWs()
			store.commit('SET_SUB_PAGE_LISTENED', true)
		}
	
	}
}
</script>

<style>
</style>
