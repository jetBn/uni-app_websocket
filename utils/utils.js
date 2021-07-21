import store from '../store/index.js'
export const connectWsTest = () => {
	uni.showLoading({
		title: '连接中...'
	})
	uni.connectSocket({url: 'wss://echo.websocket.org',	success(res) {}})
	uni.onSocketOpen((res) => {
		uni.hideLoading()
		uni.showToast({
			icon: 'none',
			title: '连接成功'
		})
		console.log('onOpen', res);
	})
	uni.onSocketError((err) => {
		uni.hideLoading()
		uni.showModal({
			content: '连接失败，可能是websocket服务不可用，请稍后再试',
			showCancel: false
		})
		console.log('onError', err);
	})
	// uni.onSocketMessage((res) => {
	// 	// this.msg = res.data
	// 	console.log('onMessage', res)
	// })
	uni.onSocketClose((res) => {
		// this.msg = false
		console.log('onClose', res)
	})
}


export const connectWs = () => {

    let wsInstance = null
	
	console.log(store)

    if(store.state.wsInstance === null) {
         wsInstance = uni.connectSocket({
            url: `wss://echo.websocket.org`,
            success: () => { }
        })

        wsInstance.onOpen(() => {
            console.log('WebSocket连接已打开！');

        })

        wsInstance.onError(function (err) {
            console.log('WebSocket连接打开失败，请检查！', JSON.stringify(err));
            store.commit('SET_WS', null)
            setTimeout(()=> {
                connectWs()
            }, 100)
        });

        wsInstance.onClose(()=> {
            console.log('WebSocket关闭')

        })

        // wsInstance.onMessage((res)=> {
        //     console.log('收到服务器内容：' + res.data);
        // })

    } else {
        if(store.state.wsInstance.readyState !== 1) {
            store.commit('SET_WS', null)
            connectWs()
        }
    }

   if( wsInstance !== null) {
	   console.log('commit')
	   store.commit('SET_WS', wsInstance)
   }
}

