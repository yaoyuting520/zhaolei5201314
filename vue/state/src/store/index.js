import Vue from 'vue'
import Vuex from 'vuex';//引入

//安装

import actions from './actions'; //代课老师
import mutations from './mutations';//校长
import state from './state';//财务
import getters from './getters'; //班主任

Vue.use(Vuex);//  store类 install方法

let store = new Vuex.Store({
	actions,mutations,state,getters
	
})
export default  store

