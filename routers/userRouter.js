//引入express模块
const express=require('express');
//引入pool模块
const pool=require('../pool.js');
//创建路由
var router=express.Router();

//登录路由
router.post('/login',(req,res) => {
    pool.query('select * from flyz_Users where U_UserName=? and U_pwd=?',[req.body.UserName,req.body.pwd],(err,result)=>{
        if(err) throw err;
        res.send(result.length.toString());
    });
  });

//修改密码
router.post('/update',(req,res)=>{
    pool.query('update flyz_Users set U_pwd=? where U_id=?',[req.body.pwd,req.body.uid],(err,result)=>{
        if(err) throw err;
        res.send(result.affectedRows.toString());
    });
});

//导出路由
module.exports=router;