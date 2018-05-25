let express = require('express');
module.exports=function(db){
	let router=express.Router();
	//详情页借口
	

// router.get('/',(req,res,next)=>{
//   	res.render('sign.ejs')
//	})
	router.post('/submit',(req,res,next)=>{
    let sql=`SELECT * FROM login WHERE username="${req.body.username}" `;
    var insert = `INSERT INTO login (username,password) VALUES("${req.body.username}","${req.body.password}")`;
	 if(req.body.username!=''&&req.body.password!=''){
	 db.query(sql,(err,data)=>{
			if(err){
				console.log('数据库出现错误')
			}else{
				console.log(data)
				if(data.length>0){
					console.log('用户名已经存在')
//					res.writeHeader(200, {'Content-Type':'text/javascript;charset=UTF-8'})
//					res.write('用户名已存在')
//					res.end()
                    res.send('3')
				}else{
					db.query(insert,(err,data)=>{
					     if(err){
							console.log("数据库连接出现错误");
						}else{
							console.log("注册成功");
						//	res.render('login.ejs')
                          res.send('11')
					   }
					})
				}
			}
		})

}

	})
	return router;
}
