import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		wsInstance: null
	},
    mutations: {
		SET_WS: (state, instance) => {
		    state.wsInstance = instance
		},
	},
    actions: {}
})
export default store