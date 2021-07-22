import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		wsInstance: null,
		isSubPageListen: false
	},
    mutations: {
		SET_WS: (state, instance) => {
		    state.wsInstance = instance
		},
		SET_SUB_PAGE_LISTENED: (state, val) => {
		    state.isSubPageListen = val
		},
	},
    actions: {}
})
export default store