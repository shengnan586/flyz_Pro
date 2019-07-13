//引入express模块
const express=require('express');
//引入中间件body-parser
const bodyParser=require('body-parser');
//引入路由
//创建服务器
var app=express();
//监听端口
app.listen(8082);
//使用中间件body-Parser
app.use(bodyParser.urlencoded({
    extended:false
}));
//托管静态资源到public目录下
app.use(express.static('public'));
//使用路由器
