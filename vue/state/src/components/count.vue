<template>
	<div class="count">
		<h1>状态管理 -----Test</h1>
		<p>{{count}}</p>
		<input type="button" name="" id="" value="+"  @click="add"/>
		<input type="button" name="" id="" value="+5"  @click="add5(5)"/>
		<input type="button" name="" id="" value="-"  @click="jian"/>
		<input type="button" name="" id="" value="业务处理"  @click="business"/>
		<input type="button" name="" id="" value="异步加载"  @click="async"/>
		
	    <!--自己本身的方法-->
		<input type="button" name="" id="" value="show"  @click="show"/>
	</div>
</template>

<script>
	import {mapActions,mapGetters} from 'vuex';
	//console.log(mapActions) //管理请求  返回一个对象 {函数：函数名}
	export default {
		data(){
			return {
			}
		},
		methods:{
			...mapActions([
			'add','add5','jian','business','async'
		  ]),
		show(){
			alert(1)
		}
		},
//		computed:{
//		 count:function(){
//		 	return this.$store.state.count
//		 }	
//		 	
//		}
         computed:mapGetters([
         'count'
         ])
	}
</script>

<style>
</style>