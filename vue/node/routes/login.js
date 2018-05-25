let express = require('express');
module.exports=function(db){
	let router=express.Router();
	//详情页借口
	
	
//	router.get('/',(req,res,next)=>{
//   	res.render('login.ejs')
//		
//		
//	})
	router.post('/submit',(req,res,next)=>{
		console.log(req.body.username,req.body.password,1111)
		//let sql = `SELECT * FROM login  username="${req.body.username}" AND password="${req.body.password}"`;
        let sql=`SELECT * FROM login WHERE username="${req.body.username}" AND password="${req.body.password}"`;
		if(req.body.username){
			    db.query(sql,(err,data)=>{
				if(err){
					console.log("数据库连接出现错误");
				}else{
					if(data.length>0){
						//res.render('success.ejs',{data:data});
                    req.session['username']=req.body.username;
                    req.session['password']=req.body.password;
						
						res.send('1')
					}else{
						//console.log(1)
						//res.render('sign.ejs',)
						res.send('0')
					}
				}
			  })
		}
		
	})
	
	return router;
}
