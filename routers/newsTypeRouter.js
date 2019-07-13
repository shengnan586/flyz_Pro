//引入express模块
const express=require('express');
//引入pool模块
const pool=require('../pool.js');
//创建路由
var router=express.Router();

//查询一级类别路由
router.get('/PType',(req,res)=>{
    pool.query('select * from flyz_NewsType where NT_ParentID=0',(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
});

//根据父类别ID查询二级类别路由
router.get('/ChildType',(req,res)=>{
    pool.query('select * from flyz_NewsType where NT_ParentID=?',[req.query.ParentID],(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
});

//新增类别路由
router.post('/add',(req,res)=>{
    pool.query('insert into flyz_NewsType set ?',[req.body.NewsType],(err,result)=>{
        if(err) throw err;
        res.send(result.affectedRows.toString());
    });
});

//修改类别路由
router.post('/update',(req,res)=>{
    pool.query('update flyz_NewsType set NT_TypeName=?,NT_ParentID=?,NT_Remark=? where NT_id=?',[req.body.TypeName,req.body.ParentID,req.body.Remark,req.body.tid],(err,result)=>{
        if(err) throw err;
        res.send(result.affectedRows.toString());
    });
});

//删除类别路由
router.get('/del',(req,res)=>{
    pool.query('delete from flyz_NewsType where NT_id=?',[req.query.tid],(err,result)=>{
        if(err) throw err;
        res.send(result.affectedRows.toString());
    });
});

//导出路由
module.exports=router;