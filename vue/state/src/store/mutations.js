export default {
	decrement:(state)=>{
		state.count++
	},
	decrement5:(state,playload)=>{
		//console.log('mutations')
		state.count+=playload
	},
	'decrement-':(state)=>{
		state.count--
	},
	
	
	
};
