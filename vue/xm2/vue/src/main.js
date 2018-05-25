import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

import './assets/css/base.css'
import './assets/js/font'; //自调用函数

import router from  './router';

import store from './store'

import axios from 'axios';
Vue.prototype.$http=axios; //为了组件内部，this.$http
axios.defaults.withCredentials=true //统一配置每次axios请求，都会携带凭证

// 拦截器
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  store.dispatch('SHOW_LOADING')
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  store.dispatch('HIDE_LOADING')
  return response;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});


import filters from './filters'// filters = {date,fillzero}

// Vue.filter('xx',fn)
// Vue.filter('xx',filters.date)

/* for(var key in filters){
  // key == 'date'|'fillzero'
  Vue.filter(key,filters[key]);
} */

Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]));//注册全局过滤器


import loading from './components/loading';
Vue.use(loading);


import 'animate.css';



new Vue({
  el: '#app',
  render: h => h(App),
  router,store
})
