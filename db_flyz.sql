#设置客户端连接服务器端编码
set names utf8;
#如果db_flyz存在，丢弃
drop database if exists db_flyz;
#创建db_flyz,设置存储的编码
create database db_flyz  charset=utf8;
#进入db_flyz
use db_flyz;
#创建新闻类别表
create table flyz_NewsType(
    NT_id smallint primary key auto_increment,
    NT_TypeName varchar(10),
    NT_ParentID smallint,
    NT_Remark varchar(50)
);

insert into flyz_NewsType values(null,'首页',0,'');
insert into flyz_NewsType values(null,'机构设置',0,'');
insert into flyz_NewsType values(null,'党建工作',0,'');
insert into flyz_NewsType values(null,'时讯要闻',0,'');
insert into flyz_NewsType values(null,'1+1项目',0,'');
insert into flyz_NewsType values(null,'彩票公益金项目',0,'');
insert into flyz_NewsType values(null,'信息公开',0,'');
insert into flyz_NewsType values(null,'本会公告',0,'');
insert into flyz_NewsType values(null,'捐赠企业单位',0,'');
insert into flyz_NewsType values(null,'基金会简介',2,'');
insert into flyz_NewsType values(null,'章程',2,'');
insert into flyz_NewsType values(null,'组织架构',2,'');
insert into flyz_NewsType values(null,'理事会',2,'');
insert into flyz_NewsType values(null,'发展历程',2,'');
insert into flyz_NewsType values(null,'会长寄语',2,'');
insert into flyz_NewsType values(null,'管理规定',2,'');
insert into flyz_NewsType values(null,'党内法规',3,'');
insert into flyz_NewsType values(null,'党建动态',3,'');
insert into flyz_NewsType values(null,'理论学习',3,'');
insert into flyz_NewsType values(null,'三会一课',3,'');
insert into flyz_NewsType values(null,'时讯信息',4,'');
insert into flyz_NewsType values(null,'基金会要闻',4,'');
insert into flyz_NewsType values(null,'1+1项目介绍',5,'');
insert into flyz_NewsType values(null,'1+1项目动态',5,'');
insert into flyz_NewsType values(null,'1+1政策文件',5,'');
insert into flyz_NewsType values(null,'1+1典型案例',5,'');
insert into flyz_NewsType values(null,'1+1志愿者风采',5,'');
insert into flyz_NewsType values(null,'1+1荣誉榜',5,'');
insert into flyz_NewsType values(null,'项目介绍',6,'');
insert into flyz_NewsType values(null,'项目动态',6,'');
insert into flyz_NewsType values(null,'资料下载',6,'');
insert into flyz_NewsType values(null,'法援故事',6,'');
insert into flyz_NewsType values(null,'业务入口',6,'');
insert into flyz_NewsType values(null,'年度工作',7,'');
insert into flyz_NewsType values(null,'财务审计',7,'');
insert into flyz_NewsType values(null,'收支公开',7,'');
insert into flyz_NewsType values(null,'专项基金',7,'');
#创建新闻表
create table flyz_News(
    N_id int primary key auto_increment,
    N_Title varchar(50),
    N_PublishTime varchar(20),
    N_ViewNumber int,
    N_Source varchar(10),
    N_Content varchar(5000),
    N_Author varchar(10),
    N_Remark varchar(50),
    NT_id smallint
);
#创建新闻图片表
create table flyz_NewsImage(
    NI_id int primary key auto_increment,
    N_id INT,
    NI_ImageName varchar(20),
    NI_URL varchar(50),
    NI_Remark varchar(50)
);
#创建留言表
create table flyz_Msg(
    M_id int primary key auto_increment,
    M_UserName varchar(10),
    M_Email varchar(20),
    M_Phone varchar(18),
    M_Commpany varchar(20),
    M_Message varchar(200),
    M_Remark varchar(50)
);
#创建友情链接表
create table flyz_Links(
    L_id smallint primary key auto_increment,
    L_LinkName varchar(20),
    L_Link varchar(30),
    L_Remark varchar(50)
);
#创建用户表
create table flyz_Users(
    U_id smallint primary key auto_increment,
    U_UserName varchar(10),
    U_Pwd varchar(12),
    U_Remark varchar(50)
);
insert into flyz_Users values(null,'admin','123456','');