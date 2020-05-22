/*----------------------------------news and system info.--biz:news and AD and system info.--------------------------------------------------
--0.system info category.*/
-- drop table system_info_category;
CREATE TABLE system_info_category(scid int(5) primary key AUTO_INCREMENT,
pscid int(5) not null comment '父菜单Id',
title varchar(50) not null comment '标题',
subtitle varchar(500) comment '子标题',
url varchar(100),remark varchar(500),
status int not null comment '是否可用', 
inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO system_info_category(pscid,title,subtitle,url,remark,status) values(0,'banner','','','banner in target index',1);
INSERT INTO system_info_category(pscid,title,subtitle,url,remark,status) values(0,'invest introduction','','','invest introduction in target index',1);
INSERT INTO system_info_category(pscid,title,subtitle,url,remark,status) values(0,'company introduction','','','company introduction',1);
INSERT INTO system_info_category(pscid,title,subtitle,url,remark,status) values(0,'about targets','','','about targets in target index',1);
INSERT INTO system_info_category(pscid,title,subtitle,url,remark,status) values(4,'大目标指南','<div style="font-size:large;">两分钟全面了解大目标</div><div>我的大目标投资安全吗?</div>','/fundwap/systemInfo','此货是循环链接,页面展示subtitle',1);
INSERT INTO system_info_category(pscid,title,subtitle,url,remark,status) values(4,'问大目标团队','<div style="font-size:15px;">小朋友你是不是有很多疑问?</div>','/fundwap/systemInfo','此货是循环链接,页面展示subtitle',1);
INSERT INTO system_info_category(pscid,title,subtitle,url,remark,status) values(0,'about drumstick','','','about drumstick',1);
INSERT INTO system_info_category(pscid,title,subtitle,url,remark,status) values(0,'drumstick system info','','','drumstick system info',1);
INSERT INTO system_info_category(pscid,title,subtitle,url,remark,status) values(0,'notification','','','notification',1);
INSERT INTO system_info_category(pscid,title,subtitle,url,remark,status) values(0,'target service content','- 持续升级的基金投资策略<br/> - 智能调仓止盈的全程服务<br/> - 每季度"大目标面对面投资"<br/> - 每月"市场行情报告" <br/> - 每日"大目标投资播报" <br/> - 大目标专属服务群','','content',1);
INSERT INTO system_info_category(pscid,title,subtitle,url,remark,status) values(0,'股票型基金购买说明','','','content',1);

/*--1.system info like 1-banners/2-company introduction/3-about target/4-introduction of selecting funds etc.*/
-- drop table system_info;
CREATE TABLE system_info(sid int(5) primary key AUTO_INCREMENT,
scid int not null comment '类型Id',
title varchar(50) not null comment '标题',
subtitle varchar(100) comment '子标题',
content varchar(1000) comment '内容', 
url varchar(200), img_url varchar(200),status int, inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(1,'banner1','','', 'http://www.baidu.com','http://www.baidu.com/img/PCpad_bc531b595cf1e37c3907d14b69e3a2dd.png',1);
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(1,'banner2','','', 'http://www.baidu.com','https://img.zcool.cn/community/01678c574d4f4832f875a429c5c234.jpg@1280w_1l_2o_100sh.jpg',1);
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(2,'了解"大目标"','<h2>了解"大目标"</h2>','了解了解了解', 'systemInfoDetail','../../../static/img/intro.png',1);
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(2,'投资理念','<p>“大目标”系列基金组合</p><p>志在为您提供省心的投资服务<br/>帮您获得实实在在的收益</p>','投资理念投资理念', 'systemInfoDetail','../../../static/img/think.png',1);
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(2,'安全可靠','<h2>保证资金安全</h2>','安全可靠安全可靠', 'systemInfoDetail','../../../static/img/safe.png',1);
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(3,'公司介绍','<h2>公司介绍</h2>','公司介绍公司介绍', 'systemInfoDetail/','',1);
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(5,'两分钟了解大目标','','[大目标]必读<br/>[大目标]实力<br/>[大目标]怎么投', '','',1);
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(5,'我对你们很失望,你们忘记了大目标的宗旨','','你们忘记了大目标的宗旨', '','',1);
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(5,'听说低于2800就送服务卡?','','送服务卡送服务卡送服务卡', '','',1);
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(7,'了解"鸡腿计划"','<h2>了解"鸡腿计划"</h2>','了解了解了解', 'systemInfoDetail','../../../static/img/intro.png',1);
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(7,'鸡腿理念','<p>“鸡腿计划”系列基金组合</p><p>志在为您提供省心的投资服务<br/>帮您获得实实在在的收益</p>','投鸡腿计划资理念投资理念', 'systemInfoDetail','../../../static/img/think.png',1);
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(7,'鸡腿可靠','<h2>保证鸡腿计划资金安全</h2>','鸡腿计划安全可靠安全可靠', 'systemInfoDetail','../../../static/img/safe.png',1);
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(8,'鸡腿计划系统信息','{"ratio":"+14.8","time":"3~5","remark":"-- 根据策略信号不定期开车,平均每月1～2次 --"}','长期投资,不能傻傻持有。鸡腿计划，帮你做资产轮动中抓住投资机会,在风险积聚时自动调仓,锁定收益。', '#','../../../static/img/stas.png',1);
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(9,'首页顶部通知','首页顶部通知','各位豆豆,因HK佛诞日、劳动节港股休市,劳动节A股休市暂停港股通服务。', '','',1);
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(10,'操作与费率说明','操作与费率说明','操作与费率说明HTML', '','',1);
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(10,'大目标服务费说明','大目标服务费说明','各大目标服务费说明HTML', '','',1);
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(10,'大目标是什么','大目标是什么','大目标是什么HTML', '','',1);
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(10,'常见问题','常见问题','各常见问题HTML', '','',1);
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(11,'股票型基金购买说明','','基金行情数据及基金交易服务由川大爷的公司提供,基金销售服务资格暂时不告诉你.本页非任何法律文件,投资前请认真阅读基金合同.市场有风险,投资需谨慎。', '','',1);

/*--2.news type*/
CREATE TABLE news_category(nc_id int(11) primary key AUTO_INCREMENT,category_name varchar(50),status int) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO news_category(category_name, status) values('投资面对面',1);

/*--3.news details invester face to face/drumstick news*/
CREATE TABLE news_info(nid int(11) primary key AUTO_INCREMENT,nc_id int, title varchar(50), img_url varchar(200), content varchar(1000), status int, inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO news_info(title,nc_id,img_url, content, status) values('[大目标]2周年运行情况和当前市场分析',1,'/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png','我是分析君...哈哈哈',1);

/*----------------------------------fund details--biz:target,drumstick and best choice--------------------------------------------------
--4.fund category  like ETF/LOF/QDFII etc.*/
CREATE TABLE fund_category(fc_id int(11) primary key AUTO_INCREMENT, 
name varchar(50) not null comment '基金类型名', 
risk_level varchar(2) not null comment '风险等级',
fund_tot int(8) not null comment '基金总数',
status int not null comment '使用状态,0-废弃,1-使用中',
show_order int not null comment '显示顺序'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO fund_category(name,risk_level,fund_tot,status,show_order) values('股票型','R3',1001,1,7); /*--fc_id=1*/
INSERT INTO fund_category(name,risk_level,fund_tot,status,show_order) values('指数型','R4',1001,1,6);
INSERT INTO fund_category(name,risk_level,fund_tot,status,show_order) values('偏股型','R4',1001,1,5);
INSERT INTO fund_category(name,risk_level,fund_tot,status,show_order) values('股债平衡型','R3',1001,1,4);
INSERT INTO fund_category(name,risk_level,fund_tot,status,show_order) values('偏债型','R2',1001,1,3);
INSERT INTO fund_category(name,risk_level,fund_tot,status,show_order) values('债券型','R1',1001,1,2);
INSERT INTO fund_category(name,risk_level,fund_tot,status,show_order) values('保本型','R1',1001,1,1);
INSERT INTO fund_category(name,risk_level,fund_tot,status,show_order) values('货币型','R1',1001,1,0); /* show_order=0,must be a type of currency fund*/

/*--5.fund manager*/
CREATE TABLE fund_manager(fm_id int(11) primary key AUTO_INCREMENT,
name varchar(30) not null comment '经理名', 
status int not null comment '是否还在干这行',
remark varchar(1000), inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO fund_manager(name,status,remark) values('张三疯',1,'经济学博士,CFA.我是三丰...不是三疯...'); /*--fm_id=1*/
INSERT INTO fund_manager(name,status,remark) values('阿瓦买提',1,'经济学**,CFA.我是买买提.'); /*--fm_id=2*/

/*--6.fund industry like manufacturing/finance/real estate/construction etc*/
CREATE TABLE fund_industry(fi_id int(11) primary key AUTO_INCREMENT, name varchar(50)) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO fund_industry(name) values('制造业');
INSERT INTO fund_industry(name) values('金融业');
INSERT INTO fund_industry(name) values('房地产业');
INSERT INTO fund_industry(name) values('农、林、牧、渔业');
INSERT INTO fund_industry(name) values('建筑业');
INSERT INTO fund_industry(name) values('其他');

/*--7.fund position like CMB/GREE etc*/
CREATE TABLE fund_stock(fs_id int(11) primary key AUTO_INCREMENT, name varchar(50), status int, code varchar(20),remark varchar(100),inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO fund_stock(name,code,status,remark) values('中国平安','601318.SH',1,'神秘代码'); /*--fs_id=1*/
INSERT INTO fund_stock(name,code,status,remark) values('招商银行','600036.SH',1,'神秘代码'); /*--fs_id=2*/

/*--8.fund customized category*/
CREATE TABLE fund_customized_category(fcc_id int(11) primary key AUTO_INCREMENT,name varchar(50),ico_color varchar(7)) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO fund_customized_category(name,ico_color) values('量化派','#FE5D4D');
INSERT INTO fund_customized_category(name,ico_color) values('稳健派','#FE554D');
INSERT INTO fund_customized_category(name,ico_color) values('价值型','#737DDE');
INSERT INTO fund_customized_category(name,ico_color) values('主题型','#707DDE');
INSERT INTO fund_customized_category(name,ico_color) values('成长型','#3BA4FF');

/*--9.fund details share_bonus_type:0-现金分红,1-红利再投*/
CREATE TABLE fund_info(fid int(11) primary key AUTO_INCREMENT,
fc_id int not null comment '基金风险类型',
fcc_id int not null comment '自定义基金类型',
fund_name varchar(50) not null comment '名称', 
fund_code varchar(20) not null comment '代码',
fund_company varchar(50) not null comment '基金公司',
fund_assets varchar(30) not null comment '资产总额', 
start_date datetime not null comment '建立时间',
management_fee float not null comment '管理费',
custody_fee float not null comment '托管费',
purchase_rate_old float not null comment'老申购费率',
purchase_rate_new float not null comment '新申购费率',
purchase_rate_discount float not null comment '购买折扣率',
topn int(8) not null comment '排名',
sched_invest_remark varchar(500) not null comment '投资时间表备注????',
purchase_process varchar(500) not null comment '申购进度????',
redemption_fee_remark varchar(500) not null comment '赎回费说明',
redemption_process varchar(500) not null comment '赎回进度',
redemption_position varchar(100) not null comment '赎回仓位',
agreement varchar(800) not null comment '协议',
share_bonus_type int not null comment '分红类型',
status int,
remark varchar(500),inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO fund_info(fc_id,fcc_id,fund_name,fund_code,fund_company,fund_assets,start_date,management_fee,custody_fee,purchase_rate_old,purchase_rate_new,purchase_rate_discount,topn,sched_invest_remark,
purchase_process,redemption_fee_remark,redemption_process,redemption_position,agreement,share_bonus_type,status,remark) values(1,1,'景顺长城沪深300增强','000311','景顺长城基金','100亿','2016-10-01',0.3,0.08,0.012,0.0012,1,50,'定投规则:遇到节假日自动延迟到下一个交易日扣款',
'T日/T+1日/T+1当日净值更新后','赎回费率如下:','赎回流程','赎回份额','景顺长城的协议',0,1,'景顺长城沪深300增强备注'); /*-- fid=1*/
INSERT INTO fund_info(fc_id,fcc_id,fund_name,fund_code,fund_company,fund_assets,start_date,management_fee,custody_fee,purchase_rate_old,purchase_rate_new,purchase_rate_discount,topn,sched_invest_remark,
purchase_process,redemption_fee_remark,redemption_process,redemption_position,agreement,share_bonus_type,status,remark) values(1,2,'富国新动力A','001508','富国','130亿','2016-10-01',0.26,0.07,0.01,0.001,1,60,'定投规则:遇到节假日自动延迟到下一个交易日扣款',
'T日/T+1日/T+1当日净值更新后','赎回费率如下:','赎回流程','赎回份额','景顺长城的协议',0,1,'富国新动力A备注'); /*-- fid=2*/
INSERT INTO fund_info(fc_id,fcc_id,fund_name,fund_code,fund_company,fund_assets,start_date,management_fee,custody_fee,purchase_rate_old,purchase_rate_new,purchase_rate_discount,topn,sched_invest_remark,
purchase_process,redemption_fee_remark,redemption_process,redemption_position,agreement,share_bonus_type,status,remark) values(1,2,'富国新动力B','001507','富国','131亿','2016-10-11',0.26,0.07,0.01,0.001,1,57,'定投规则:遇到节假日自动延迟到下一个交易日扣款',
'T日/T+1日/T+1当日净值更新后','赎回费率如下:','赎回流程','赎回份额','景顺长城的协议',0,1,'富国新动力B备注'); /*-- fid=3*/
INSERT INTO fund_info(fc_id,fcc_id,fund_name,fund_code,fund_company,fund_assets,start_date,management_fee,custody_fee,purchase_rate_old,purchase_rate_new,purchase_rate_discount,topn,sched_invest_remark,
purchase_process,redemption_fee_remark,redemption_process,redemption_position,agreement,share_bonus_type,status,remark) values(1,2,'富国新动力C','001507','富国','132亿','2016-10-12',0.26,0.07,0.01,0.001,1,52,'定投规则:遇到节假日自动延迟到下一个交易日扣款',
'T日/T+1日/T+1当日净值更新后','赎回费率如下:','赎回流程','赎回份额','景顺长城的协议',0,0,'富国新动力C备注'); /*-- fid=4*/
INSERT INTO fund_info(fc_id,fcc_id,fund_name,fund_code,fund_company,fund_assets,start_date,management_fee,custody_fee,purchase_rate_old,purchase_rate_new,purchase_rate_discount,topn,sched_invest_remark,
purchase_process,redemption_fee_remark,redemption_process,redemption_position,agreement,share_bonus_type,status,remark) values(8,1,'天弘鸿运宝','001386','天弘','190亿','2015-10-01',0.3,0.08,0.012,0.0012,1,80,'定投规则:遇到节假日自动延迟到下一个交易日扣款',
'T日/T+1日/T+1当日净值更新后','赎回费率如下:','赎回流程','赎回份额','天弘鸿运宝的协议',0,1,'天弘鸿运宝备注'); /*-- fid=5*/

/*--10.fund bonus and split (bonus.type=0,split.type=1)*/
CREATE TABLE fund_bonus_split(fbs_id int(11) primary key AUTO_INCREMENT,fid int,type int,remark varchar(30),amt float,currency varchar(5),inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO fund_bonus_split(fid,type,remark,amt,currency) values(1,1,'单位分红',0.15,'元');
INSERT INTO fund_bonus_split(fid,type,remark,amt,currency) values(1,1,'单位分红',0.19,'元');

/*--11.fund redemption rate*/
CREATE TABLE fund_redemption_rate(frr_id int(11) primary key AUTO_INCREMENT,fid int,hold_days int,rate float) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO fund_redemption_rate(fid,hold_days,rate) values(1,7,1.5); /*--[0,7)*/
INSERT INTO fund_redemption_rate(fid,hold_days,rate) values(1,365,0.5); /*--[7,365)*/
INSERT INTO fund_redemption_rate(fid,hold_days,rate) values(1,730,0.0); /*--[365,730)*/

/*--12.fund manager matchs funds*/
/*--12.fund manager matchs funds*/
CREATE TABLE fund_managers(fms_id int(11) primary key AUTO_INCREMENT,
fid int not null comment '基金ID',
fm_id int not null comment '经理ID',
inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO fund_managers(fid,fm_id) values(1,1); /*--景顺长城沪深300增强--张三疯*/
INSERT INTO fund_managers(fid,fm_id) values(1,2); /*--景顺长城沪深300增强--阿瓦买提*/
INSERT INTO fund_managers(fid,fm_id) values(5,1); /*--景顺长城沪深300增强--张三疯*/
INSERT INTO fund_managers(fid,fm_id) values(5,2); /*--景顺长城沪深300增强--阿瓦买提*/

/*-- 13.fund managers and their fund history*/
CREATE TABLE fund_managers_history(fmh_id int(11) primary key AUTO_INCREMENT,
fm_id int not null comment '经理ID',
fid int not null comment '基金ID',
review_num float,
hu_shen_300 float,
inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO fund_managers_history(fm_id,fid,review_num,hu_shen_300) values(1,1,10.52,-10.1);

/*--14.fund position, stock position*/
CREATE TABLE fund_position(fp_id int(11) primary key AUTO_INCREMENT,
fid int not null comment '基金ID',
fs_id int not null comment '股票ID',
hold_num float not null comment '仓位',
inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO fund_position(fid,fs_id,hold_num) values(1,1,752);/*--景顺长城沪深300增强-中国平安-7.52*/
INSERT INTO fund_position(fid,fs_id,hold_num) values(1,2,513);/*--景顺长城沪深300增强-招商银行-5.13*/

/*--15.fund postion, other position category*/
CREATE TABLE fund_position_other_category(fpoc_id int(11) primary key AUTO_INCREMENT,
name varchar(30) not null comment '持仓类型名') ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO fund_position_other_category(name) values('债券');
INSERT INTO fund_position_other_category(name) values('银行存款');
INSERT INTO fund_position_other_category(name) values('其他');

/*--16.fund position, other position*/
CREATE TABLE fund_position_other(fpo_id int(11) primary key AUTO_INCREMENT,
fid int not null comment '基金ID',
fpoc_id int not null comment '持仓类型',
hold_num float not null comment '仓位',
inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO fund_position_other(fid,fpoc_id,hold_num) values(1,1,3.16);
INSERT INTO fund_position_other(fid,fpoc_id,hold_num) values(1,2,2.6);
INSERT INTO fund_position_other(fid,fpoc_id,hold_num) values(1,3,0.66);

/*--17.fund worth history*/
CREATE TABLE fund_worth_history(fwh_id int(11) primary key AUTO_INCREMENT,
fid int not null comment '基金ID',
worth float not null comment '万份收益/净值',
daily_change float not null comment '七日年化/日涨跌幅',
inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO fund_worth_history(fid,worth,daily_change,inserttime) values(1,2.195,-3.37,'2020-03-23 3:14:36');
INSERT INTO fund_worth_history(fid,worth,daily_change,inserttime) values(1,0.02196,-3.37,'2020-03-24 13:14:36');
INSERT INTO fund_worth_history(fid,worth,daily_change,inserttime) values(1,0.02096,3.17,'2020-03-25 13:14:36');
INSERT INTO fund_worth_history(fid,worth,daily_change,inserttime) values(1,0.02296,-2.07,'2020-03-26 13:14:36');
INSERT INTO fund_worth_history(fid,worth,daily_change,inserttime) values(5,2.195,-3.37,'2020-03-23 13:14:36');
INSERT INTO fund_worth_history(fid,worth,daily_change,inserttime) values(5,2.295,-3.17,'2020-03-24 13:14:36');
INSERT INTO fund_worth_history(fid,worth,daily_change,inserttime) values(5,2.395,-3.07,'2020-03-25 13:14:36');

/*--18.stage fund worth history*/
CREATE TABLE fund_worth_history_stage(fwhs_id int(11) primary key AUTO_INCREMENT,
fid int not null comment '基金ID',
stage int not null comment '天数,7,30,90,365,365*2,365*3,365*5,99999',
worth float not null comment '涨跌幅',
topn int not null comment '同比排名',
his_tot int not null comment '历史总量',
inserttime timestamp default CURRENT_TIMESTAMP,
updatetime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO fund_worth_history_stage(fid,stage,worth,topn,his_tot) values(1,7,0.0223,122,1203); -- 景顺长城沪深300增强,7,0.0223,122,1203
INSERT INTO fund_worth_history_stage(fid,stage,worth,topn,his_tot) values(1,30,0.034,120,1200); -- 景顺长城沪深300增强,30,0.034,120,1200
INSERT INTO fund_worth_history_stage(fid,stage,worth,topn,his_tot) values(1,90,-0.011,120,1100); -- 景顺长城沪深300增强,90,-0.011,120,1100
INSERT INTO fund_worth_history_stage(fid,stage,worth,topn,his_tot) values(1,365,0.111,110,1100); -- 景顺长城沪深300增强,365,0.111,110,1100

/*------------------------------------fund plans--biz:target,drumstick and best choice------------------------------------------------
--19.fund plan (returns_type:1-七日年化收益,2-近六月历史收益,3-近三年历史收益|page_type:1-only text or image,2-including FOFs etc.)*/
CREATE TABLE fund_plan(fpl_id int(11) primary key AUTO_INCREMENT,
name varchar(20),
returns float,
loss float,
returns_type int,
threshold float,
sched_threshold float,
img_url varchar(200),
page_type int,
details varchar(500),
short_intro varchar(30),
remark varchar(200),inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO fund_plan(name,returns,loss,returns_type,threshold,sched_threshold,img_url,page_type,details,short_intro,remark) values('超级现金宝',2.8,0,1,100,0,'//images_url',1,'','','仅一张图片的页面');
INSERT INTO fund_plan(name,returns,loss,returns_type,threshold,sched_threshold,img_url,page_type,details,short_intro,remark) values('全明星计划',35.57,43.11,3,1000,500,'//images_url',2,'组合详情:','跟对人买对基,实力派经理一网打尽','有基列表');
INSERT INTO fund_plan(name,returns,loss,returns_type,threshold,sched_threshold,img_url,page_type,details,short_intro,remark) values('海投计划',30.63,18.24,3,1000,100,'//images_url',2,'组合详情:','全球资产配置,把握更多投资机会','高尔基');

/*--20.fund plan details*/
CREATE TABLE fund_plan_details(fpd_id int(11) primary key AUTO_INCREMENT,fpl_id int,fid int,inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO fund_plan_details(fpl_id,fid) values(2,1); /*--全明星计划-景顺长城沪深300增强,fpid_id=1*/
INSERT INTO fund_plan_details(fpl_id,fid) values(2,2); /*--全明星计划-富国新动力A,fpid_id=2*/
INSERT INTO fund_plan_details(fpl_id,fid) values(3,2); /*--海投计划-富国新动力A,fpid_id=3*/

/*--21.combining plan*/
CREATE TABLE plan_combin(pc_id int(11) primary key AUTO_INCREMENT,name varchar(20),remark varchar(50)) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO plan_combin(name,remark) values('活期理财','选哪个火鸡呢?天鸿?');
INSERT INTO plan_combin(name,remark) values('高成长股基组合','高高尔基');

/*--22.fund plans match combining plans  N:N, status:0-useless,1-using*/
CREATE TABLE fund_plan_combin(fpc_id int(11) primary key AUTO_INCREMENT,pc_id int,fpd_id int,status int,inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO fund_plan_combin(pc_id,fpd_id,status) values(2,1,1); /*--高成长股基组合-全明星计划*/
INSERT INTO fund_plan_combin(pc_id,fpd_id,status) values(2,3,1); /*--高成长股基组合-海投计划*/

/*------------------------------------mine--biz:target and best choice------------------------------------------------
--23.user details*/
CREATE TABLE userdetail(uid int(11) primary key AUTO_INCREMENT,username varchar(30),nickname varchar(30),phonenumber varchar(30),password varchar(100),is_fingerprint boolean,
is_posture boolean,is_fund_account boolean,target_bouns_amt float,inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO userdetail(username,nickname,phonenumber,password,is_fingerprint,is_posture,is_fund_account,target_bouns_amt) values('Lady Gaga','GAGA','18808988989','YadnSEWOdwO09uwFepOe====',true,false,false,385.95);

/*--24.fund account (risk_level:1-稳健,2-保守...;tax_id:1-仅为中国税收居民,2-仅为非中国税收居民,3-既是中国税收居民也是其他国家(地区)税收居民);occupation:1-科研人员*/
CREATE TABLE user_fund_account(ufa_id int(11) primary key AUTO_INCREMENT,real_name varchar(30),risk_level int,tax_id int,trade_password varchar(50),idcard_num varchar(20),
idcard_expdate datetime,address varchar(100),occupation int,inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO user_fund_account(real_name,risk_level,tax_id,trade_password,idcard_num,idcard_expdate,address,occupation) values('张翠花',1,1,'YadnSEWOdwO09uwFepOe====','110221199202235460','2033-12-02','上海市南京东西路xxx号',1);

/*--25.service card (source:1-购买,2-赠送,3-免费领取,4-友情援助;status:1-未使用,0-已使用)*/
CREATE TABLE user_card(uc_id int(11) primary key AUTO_INCREMENT,
uid int not null comment '用户id',
name varchar(20) not null comment '卡名',
source int not null comment '来源',
status int not null comment '状态',
exp_date_start datetime not null comment '有效期开始时间',
exp_date_end datetime not null comment '有效期结束时间',
inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO user_card(uid,name,source,status,exp_date_start,exp_date_end) values(1,'大目标服务卡',1,1,'2020-01-22','2022-01-22');
INSERT INTO user_card(uid,name,source,status,exp_date_start,exp_date_end) values(1,'大目标服务卡',1,1,'2020-01-22','2022-01-22');
INSERT INTO user_card(uid,name,source,status,exp_date_start,exp_date_end) values(1,'加鸡腿服务卡',1,1,'2020-01-22','2022-01-22');

/*--26.bank information*/
CREATE TABLE bank(bid int(11) primary key AUTO_INCREMENT,
name varchar(50) not null comment '银行名',
status int not null comment '是否可用',
remark varchar(500) comment '备注'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO bank(name,status,remark) values('包头银行',1,'硕鼠01');
INSERT INTO bank(name,status,remark) values('工商银行',1,'惹不起');
INSERT INTO bank(name,status,remark) values('建设银行',1,'基建狂魔的银行');
INSERT INTO bank(name,status,remark) values('天地银行',1,'天地良心');

/*--27.branch bank information*/
CREATE TABLE branch_bank(bbid int(11) primary key AUTO_INCREMENT,
pid int not null comment '省份id',
cid int not null comment '城市id',
bid int not null comment '银行id',
name varchar(50) not null comment '分行名',
status int not null comment '是否可用',
policy varchar(100) comment '政策',
remark varchar(500) comment '备注'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO branch_bank(pid,cid,bid,name,status,policy,remark) values(1,1,1,'包头银行(帝都天门支行)',1,'单笔支付限额10万,日限额10万,月限额3000万','');
INSERT INTO branch_bank(pid,cid,bid,name,status,policy,remark) values(1,1,4,'天地银行(帝都门天支行)',1,'单笔支付限额11万,日限额11万,月限额3000万','');
INSERT INTO branch_bank(pid,cid,bid,name,status,policy,remark) values(1,2,2,'工商银行(都门天支行)',1,'单笔支付限额5万,日限额10万,月限额300万','');

/*--27./28.province/city*/
CREATE TABLE province(pid int(11) primary key AUTO_INCREMENT,
name varchar(20) not null comment '省名') ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO province(name) values('帝都');
INSERT INTO province(name) values('魔都');
INSERT INTO province(name) values('废都');
INSERT INTO province(name) values('旧都');
INSERT INTO province(name) values('陪都');
INSERT INTO province(name) values('妖都');
INSERT INTO province(name) values('伪都');
INSERT INTO province(name) values('腐都');
INSERT INTO province(name) values('雌都');

CREATE TABLE city(cid int(11) primary key AUTO_INCREMENT,
pid int not null comment '省Id',
name varchar(30) not null comment '城市名') ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO city(pid,name) values(1,'五年模拟区');
INSERT INTO city(pid,name) values(1,'三年高考区');
INSERT INTO city(pid,name) values(1,'东城区');
INSERT INTO city(pid,name) values(1,'西城区');
INSERT INTO city(pid,name) values(1,'南城区');
INSERT INTO city(pid,name) values(1,'北城区');

/*--29.bank card number bankid*/
CREATE TABLE user_bank(ub_id int(11) primary key AUTO_INCREMENT,
uid int not null comment '用户id',
card_number varchar(20) not null comment '卡号',
bid int not null comment '银行id',
bbid int not null comment '支行id',
pid int not null comment '省id',
cid int not null comment '市id',
leave_phonenumber varchar(15) not null comment '预留电话',
is_default int comment '是否默认') ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO user_bank(uid,card_number,bid,bbid,pid,cid,leave_phonenumber,is_default) values(1,'520145687956235',1,1,1,1,'18856898989',0);
INSERT INTO user_bank(uid,card_number,bid,bbid,pid,cid,leave_phonenumber,is_default) values(1,'510145687956236',2,3,1,1,'18856898989',1);

/*--30.fund template*/
CREATE TABLE fund_template(ft_id int(11) primary key AUTO_INCREMENT,tmp_name varchar(50),remark varchar(500), status int, inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO fund_template(tmp_name,status,remark) values('2006聚能环01',1,'2019年12月前表现不错');
INSERT INTO fund_template(tmp_name,status,remark) values('2006聚能环02',1,'关注了神秘代码007');
INSERT INTO fund_template(tmp_name,status,remark) values('钻石王老五01',1,'王老五护体');
INSERT INTO fund_template(tmp_name,status,remark) values('钻石王老五02',1,'隔壁老王是钻石王老五');

/*--31.fund template and its funds*/
CREATE TABLE fund_templates(fts_id int(11) primary key AUTO_INCREMENT,ft_id int,fid int,percentage float,remark varchar(500), inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO fund_templates(ft_id,fid,percentage,remark) values(1,1,0.41,''); -- 2006聚能环01,景顺长城沪深300增强,41%
INSERT INTO fund_templates(ft_id,fid,percentage,remark) values(1,2,0.44,''); -- 2006聚能环01,富国新动力A,44%
INSERT INTO fund_templates(ft_id,fid,percentage,remark) values(1,3,0.15,''); -- 2006聚能环01,富国新动力B,15%
INSERT INTO fund_templates(ft_id,fid,percentage,remark) values(2,2,1,''); -- 2006聚能环02,富国新动力A,44%
INSERT INTO fund_templates(ft_id,fid,percentage,remark) values(3,3,0.25,''); -- 钻石王老五01,富国新动力B,25%
INSERT INTO fund_templates(ft_id,fid,percentage,remark) values(3,2,0.25,''); -- 钻石王老五01,富国新动力A,25%
INSERT INTO fund_templates(ft_id,fid,percentage,remark) values(3,1,0.50,''); -- 钻石王老五01,景顺长城沪深300增强,50%
INSERT INTO fund_templates(ft_id,fid,percentage,remark) values(1,5,0.50,''); -- 2006聚能环01,天弘鸿运宝,100%

/*------------------------------------target--biz:target------------------------------------------------
--32.target run_status:-1-流标,0-申请中,1-建仓中,2-盈利中,3-浮亏中,4-已达标,5已清仓 ,0<N<4->运行中*/
CREATE TABLE targets(tid int(11) primary key AUTO_INCREMENT,ft_id int,name varchar(10),target_ratio float,apply_starttime datetime,apply_endtime datetime,run_status int,run_days int,pre_run varchar(20),inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO targets(name,ft_id,target_ratio,run_status,run_days,pre_run,apply_starttime,apply_endtime) values('2006',1,0.08,0,0,'6-12','2020-04-07 10:10:00','2020-04-13 10:10:00');-- 2006,2006聚能环01
INSERT INTO targets(name,ft_id,target_ratio,run_status,run_days,pre_run,apply_starttime,apply_endtime) values('2005',2,0.08,1,0,'6-12','2020-04-01 10:10:00','2020-04-06 10:10:00');-- 2005,2006聚能环02
INSERT INTO targets(name,ft_id,target_ratio,run_status,run_days,pre_run,apply_starttime,apply_endtime) values('2004',3,0.05,2,10,'5-12','2020-03-24 10:10:00','2020-03-31 10:10:00');-- 2004,钻石王老五01
INSERT INTO targets(name,ft_id,target_ratio,run_status,run_days,pre_run,apply_starttime,apply_endtime) values('2003',1,0.08,3,17,'5-12','2020-03-16 10:10:00','2020-03-23 10:10:00');
INSERT INTO targets(name,ft_id,target_ratio,run_status,run_days,pre_run,apply_starttime,apply_endtime) values('2002',2,0.07,4,40,'5-12','2020-03-16 10:10:00','2020-03-23 10:10:00');
INSERT INTO targets(name,ft_id,target_ratio,run_status,run_days,pre_run,apply_starttime,apply_endtime) values('2001',1,0.06,4,25,'5-12','2020-03-16 10:10:00','2020-03-23 10:10:00');
INSERT INTO targets(name,ft_id,target_ratio,run_status,run_days,pre_run,apply_starttime,apply_endtime) values('2000',2,0.05,4,34,'5-12','2020-03-16 10:10:00','2020-03-23 10:10:00');
INSERT INTO targets(name,ft_id,target_ratio,run_status,run_days,pre_run,apply_starttime,apply_endtime) values('1999',3,0.08,5,50,'5-12','2020-03-16 10:10:00','2020-03-23 10:10:00');


/*--33.history of daily target news,status:0-show,1-not show*/
CREATE TABLE target_history(th_id int(11) primary key AUTO_INCREMENT,tid int,title varchar(50), content varchar(1000),status int,inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO target_history(tid,title,content,status) values(1,'2月23日[大目标]投资播报','萌新们吓被股市吓坏了吧.',1);

/*--34.fund trade summery status:0-提前赎回,1-到期赎回*/
CREATE TABLE target_trade_summery(tts_id int(11) primary key AUTO_INCREMENT,uid int,tid int,bc_id int,invest_amt float,bonus_amt float,status int,inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO target_trade_summery(uid,tid,bc_id,invest_amt,bonus_amt,status) values(1,1,1,3000,242.08,1);/*--Lady Gaga-2006期大目标-使用银行卡0005回款账号-投资3000-收益242.08-到期赎回*/

/*--35.fund trade body status:0-赎回中,1-已到账*/
CREATE TABLE target_trade_process(ttp_id int(11) primary key AUTO_INCREMENT,uid int,fid int,tt_id int,tid int,status int,confirm_fund_amt float,confirm_date datetime,pay_date datetime,inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO target_trade_process(uid,fid,tt_id,tid,status,confirm_fund_amt,confirm_date,pay_date) values(1,2,1,1,2,340.85,'2020-02-21','2020-02-25');/*--Lady Gaga-景顺长城沪深300增强-天弘弘运宝A-1-[大目标]1902-转换-转入237.36-转出*/

/*--36.fund trade history details  status:0-申购,1-分红,2-赎回; trade_status:1-已确认*/
CREATE TABLE target_trade_process_details1(ttpd1_id int(11) primary key AUTO_INCREMENT,uid int,fid int,tid int,bc_id int,apply_amt float,confirm_worth float,confirm_portion float,charge float, trade_status int,
order_date datetime,pay_date datetime,confirm_date datetime,inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO target_trade_process_details1(uid,fid,tid,bc_id,apply_amt,confirm_worth,confirm_portion,charge,trade_status,order_date,pay_date,confirm_date) values(1,1,1,1,3000,1.0,3000,0.00,1,'2019-10-21 13:58:10','2019-10-21 13:58:10','2019-11-01 13:58:10');

/*--37.fund trade history details  status:0-申购,1-分红,2-赎回; trade_status:1-已确认*/
CREATE TABLE target_trade_process_details2(tthd2_id int(11) primary key AUTO_INCREMENT,uid int,tid int,fid_in int,fid_out int,worth_out float,worth_in float,fund_portion_in float,fund_portion_out float,charge_in float,charge_out float,
trade_status_in int,trade_status_out int,inserttime timestamp default CURRENT_TIMESTAMP) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO target_trade_process_details2(uid,tid,fid_in,fid_out,worth_out,worth_in,fund_portion_in,fund_portion_out,charge_in,charge_out,trade_status_in,trade_status_out) values(1,1,1,2,1,1.0,1.26,188.3,237.26,0.00,1,1);
