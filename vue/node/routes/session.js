let express = require('express');
module.exports=function(db){
	let router=express.Router();
	router.post('/',(req,res,next)=>{
       var sessions=req.session;
       console.log(sessions)
       res.send(sessions)
	})
	return router;
}
