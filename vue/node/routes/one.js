let express = require('express');
module.exports=function(db){
	let router=express.Router();
	//详情页借口
	
	router.get('/',(req,res,next)=>{
		let sql = `SELECT * FROM json`;
		db.query(sql,(err,data)=>{
			if(err){
				console.log("数据库连接出现错误");
			}else{
				console.log(data.length)
				res.render('one.ejs',{data:data})
			}
		})
	})
	return router;
}
