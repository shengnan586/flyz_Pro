//引入express模块
const express=require('express');
//引入pool模块
const pool=require('../pool.js');
//创建路由
var router=express.Router();

//查询新闻列表
router.get('/news',(req,res)=>{
    pool.query('select * from flyz_News where NT_id=? limit ?,?',[req.query.tid,req.query.pageStart,req.query.pageSize],(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
});

//查询新闻详情
router.get('/newDetail',(req,res)=>{
    pool.query('select * from flyz_News where N_id=?',[req.query.nid],(err,result)=>{
        if(err) throw err;
        res.send(result);
    });
});

//新增新闻
router.post('/add',(req,res)=>{
    pool.query('insert into flyz_News set ?',[req.body.new],(err,result)=>{
        if(err) throw err;
        res.send(result.affectedRows.toString());
    });
});

//修改新闻
router.post('/update',(req,res)=>{
    var bodys=req.body;
    pool.query('update flyz_News set N_title=?,N_PublishTime=?,N_ViewNumber=?,N_Source=?,N_Content=?,N_Author=?,N_Remark=?,NT_id=? where N_id=?',[bodys.Title,bodys.PublishTime,bodys.ViewNumber,bodys.Source,bodys.Content,bodys.Author,bodys.Remark,bodys.tid,bodys.nid],(err,result)=>{
        if(err) throw err;
        res.send(result.affectedRows.toString());
    });
});

//删除新闻
router.get('/del',(req,res)=>{
    pool.query('delete from flyz_News where N_id=?',[req.query.nid],(err,result)=>{
        if(err) throw err;
        res.send(result.affectedRows.toString());
    });
});


//导出路由
module.exports=router;