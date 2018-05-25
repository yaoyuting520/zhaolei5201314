let express = require('express')
let app = express();
let bodyParser = require('body-parser');//就是一个函数，中间件
let multer = require('multer');//引入中间件 
let pathLib = require('path');
let fs = require('fs');
let ejs=require("ejs");
let consolidate = require('consolidate')

let cookieSession= require('cookie-session');
let sessionArr=[];
for(var i=0;i<1000000;i++){
  sessionArr.push('alex_'+Math.random().toFixed(5));
}
app.use(cookieSession({
  name:'ss_id',
  keys:sessionArr,
  maxAge:1000*60*60
}))



var cors = require('cors')
//配置cors中间件
app.use(cors({
  "origin": ["http://localhost:8001","http://localhost:3000","http://localhost:8080"],  //允许所有前端域名
  "credentials":true,//允许携带凭证
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE", //被允许的提交方式
  "allowedHeaders":['Content-Type','Authorization']//被允许的post方式的请求头
}));



var mysql = require("mysql");

var db =  mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    port     : 3307,
    database : 'test'
});



app.listen(8003);


//配置中间件

//post数据
app.use(bodyParser());

//文件上传
let multerObj = multer({ dest: './upload' });
app.use(multerObj.any());

//模板引擎管理
app.set('view.engine','html');//模板引擎输出类型
app.set('views','./views'); //引擎模块目录指定
app.engine('html',consolidate.ejs);  //指定引擎类型

app.use('/login',require('./routes/login')(db));
app.use('/',require('./routes/index')(db));
app.use('/one',require('./routes/one')(db));
app.use('/sign',require('./routes/sign')(db));
app.use('/session',require('./routes/session')(db));




app.use(express.static('./www'));


