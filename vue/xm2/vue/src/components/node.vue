<template>
  <div class="node">
    <h3>跨域</h3>
    <h3>跨域</h3>
    <h3>跨域</h3>
    <a href="javascript:;"  @click="get">跨域读node数据news接口</a>
    <a href="javascript:;" @click="ASYNC_ARTICLE">跨域读node数据article接口</a>
    <a href="javascript:;" @click="login">登录</a>
    <a href="javascript:;" @click="vip">用户中心</a>
  </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
  methods:{
    ...mapActions([
      'ASYNC_ARTICLE'
    ]),
    get(){
      this.$http({
        url:'http://localhost:3000/news',
        params:{start:1,count:2}
      }).then(
        res => console.log(res)
      )
    },
    login(){
      this.$http({
        url:'http://localhost:3000/login',
        params:{username:'alex',password:'alex123'},
        // withCredentials: true //单条携带
      }).then(
        res => console.log(res)// this.$router.push({name:'user',query:{res.xx}})
      )
    },
    vip(){
      this.$http({
        url:'http://localhost:3000/users',
        // withCredentials: true //单条携带
      }).then(
        res => console.log(res)// this.$router.push({name:'user',query:{res.xx}})
      )
    }
  }
}
</script>

