export default {
	'add':({commit,state})=>{
//		console.log(a.commit(type,payload))
//		console.log(a.state)
       commit('decrement');
	},
	'add5':({commit,state},playload)=>{
       commit('decrement5',playload);
		
	},
	'jian':({commit,state},playload)=>{
       commit('decrement-');
	},
	'business':({commit,state},playload)=>{
		if(state.count%2==0){
			commit('decrement');
		}
	},
	'async':({commit,state},playload)=>{
       setTimeout(()=>{
			commit('decrement');
       },1000)
	},
	
};
