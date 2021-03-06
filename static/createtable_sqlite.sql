$sqlite3 fundwap.db
----------------------------------news and system info.--biz:news and AD and system info.--------------------------------------------------
--0.system info category
CREATE TABLE system_info_category(scid Integer primary key autoincrement ,
pscid int(5) not null comment '父菜单Id',
title varchar(50) not null comment '标题',
subtitle varchar(500) comment '子标题',
url varchar(100),remark varchar(500),
status int not null comment '是否可用', 
inserttime timestamp not null default (datetime('now','localtime')));
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
INSERT INTO system_info_category(pscid,title,subtitle,url,remark,status) values(0,'投资协议','','','content',1);
INSERT INTO system_info_category(pscid,title,subtitle,url,remark,status) values(0,'我的理财菜单','','','我的理财菜单,可根据实际需要自定义',1);

--1.system info like banners/company introduction/about target/introduction of selecting funds etc.
CREATE TABLE system_info(sid Integer primary key autoincrement,
scid int not null comment '类型Id',
title varchar(50) not null comment '标题',
subtitle varchar(100) comment '子标题',
content varchar(1000) comment '内容', 
url varchar(200) comment '外链地址',
img_url varchar(200) comment '图片地址',
status int, inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(1,'banner1','','', 'http://www.baidu.com','../../../static/img/b1.png',1);
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(1,'banner2','','', 'http://www.baidu.com','../../../static/img/b2.png',1);
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
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(12,'投资协议','','甲方:投资者<br/>乙方:帝都金金豆****有限公司<br/>下面是投资协议内容...', '','',1);
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(13,'■ 消息中心','消息中心','消息,请列出最近10条', '/fundWap/myNews','',1);
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(13,'✿ 新人指南','<b>新人指指南</b>','新人指南是多个问题的链接页面,只要html排好版,即可贴来.', '/fundWap/systemInfoDetail','',1);
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(13,'● 我的大目标卡','','', '/fundWap/myCards','',1);
INSERT INTO system_info(scid,title,subtitle,content,url,img_url,status) values(13,'◕ 推荐好友','','', '','',1);

--2.news type 
CREATE TABLE news_category(nc_id Integer primary key autoincrement,
category_name varchar(50) not null comment '新闻类型名',
status int,
is_broadcast int not null comment '是否广播,发送给每人,0-不发送,1-发送');
INSERT INTO news_category(category_name, status, is_broadcast) values('投资面对面',1,0);
INSERT INTO news_category(category_name, status, is_broadcast) values('鸡腿计划动态',1,0);
INSERT INTO news_category(category_name, status, is_broadcast) values('鸡腿计划发车提醒',1,1);
INSERT INTO news_category(category_name, status, is_broadcast) values('止盈赎回提醒',1,1);
INSERT INTO news_category(category_name, status, is_broadcast) values('[豆妹专栏]',1,1);
INSERT INTO news_category(category_name, status, is_broadcast) values('持仓动态',1,1);

--3.news details invester face to face/drumstick news/
CREATE TABLE news_info(nid Integer primary key autoincrement,
nc_id int not null comment '新闻分类',
title varchar(50) not null comment '新闻标题',
img_url varchar(200) comment '图片地址',
content varchar(1000) not null comment '内容',
status int, inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO news_info(title,nc_id,img_url, content, status) values('[大目标]2周年运行情况和当前市场分析',1,'../../../static/img/s1.jpg','我是分析君...哈哈哈',1);
INSERT INTO news_info(title,nc_id,img_url, content, status) values('新的一年,[大目标]新的变化',1,'../../../static/img/s2.jpeg','<div style="font-size:15px;">新的一年,[大目标]新的变化.<br/>小朋友你是不是有很多疑问?</div>',1);
INSERT INTO news_info(title,nc_id,img_url, content, status) values('[大目标]1.5周年运行情况和当前市场分析',1,'../../../static/img/s1.jpg','我是分析君...哈哈哈',1);
INSERT INTO news_info(title,nc_id,img_url, content, status) values('[鸡腿计划]2周年运行情况和当前市场分析',2,'../../../static/img/s1.jpg','我是分析君...哈哈哈',1);
INSERT INTO news_info(title,nc_id,img_url, content, status) values('新的一年,[鸡腿计划]新的变化',2,'../../../static/img/s1.jpg','我是鸡腿计划....哈哈哈',1);
INSERT INTO news_info(title,nc_id,img_url, content, status) values('[鸡腿计划]2周年运行情况和当前市场分析',2,'../../../static/img/s1.jpg','我是鸡腿计划....哈哈哈',1);
INSERT INTO news_info(title,nc_id,img_url, content, status) values('[鸡腿计划]2周年发车',4,'','满足周五送卡条件,免费送您一张服务卡,有效期截止:2020-05-11。下周五满足条件将继续送卡,建议您低位跟投,规律跟投。满足周五送卡条件,免费送您一张服务卡,有效期截止:2020-05-11。下周五满足条件将继续送卡,建议您低位跟投,规律跟投。',1);
INSERT INTO news_info(title,nc_id,img_url, content, status) values('[止盈赎回提醒]2010止盈赎回提醒',4,'','我是鸡腿计划,开车是我的一大爱好....哈哈哈',1);
INSERT INTO news_info(title,nc_id,img_url, content, status) values('[豆妹专栏]今天大目标大涨',4,'','2009~2011涨1%,其他暂涨2%吧,具体问建国同志',1);
INSERT INTO news_info(title,nc_id,img_url, content, status) values('[鸡腿计划]2周年发车',4,'','我是鸡腿计划,开车是我的一大爱好....哈哈哈',1);
INSERT INTO news_info(title,nc_id,img_url, content, status) values('[止盈赎回提醒]2010止盈赎回提醒',4,'','我是鸡腿计划,开车是我的一大爱好....哈哈哈',1);
INSERT INTO news_info(title,nc_id,img_url, content, status) values('[豆妹专栏]今天大目标涨',4,'','2009~2011涨1%,其他暂涨2%吧,具体问建国同志',1);
INSERT INTO news_info(title,nc_id,img_url, content, status) values('04月24日[大目标]投资播报',5,'','今日大盘上涨0.3%。预计今天[大目标]收益范围在上涨0.09%至0.23%之间,强于大盘表现',1);
INSERT INTO news_info(title,nc_id,img_url, content, status) values('04月25日[大目标]投资播报',5,'','今日大盘上涨0.31%。预计今天[大目标]收益范围在上涨0.09%至0.23%之间,强于大盘表现',1);

----------------------------------fund details--biz:target,drumstick and best choice--------------------------------------------------
--4.fund category  like ETF/LOF/QDFII etc.
CREATE TABLE fund_category(fc_id Integer primary key autoincrement, 
name varchar(50) not null comment '基金类型名', 
risk_level varchar(2) not null comment '风险等级',
fund_tot int(8) not null comment '基金总数',
status int not null comment '使用状态,0-废弃,1-使用中',
show_order int not null comment '显示顺序')
INSERT INTO fund_category(name,risk_level,fund_tot,status,show_order) values('股票型','R3',1001,1,7); /*--fc_id=1*/
INSERT INTO fund_category(name,risk_level,fund_tot,status,show_order) values('指数型','R4',1001,1,6);
INSERT INTO fund_category(name,risk_level,fund_tot,status,show_order) values('偏股型','R4',1001,1,5);
INSERT INTO fund_category(name,risk_level,fund_tot,status,show_order) values('股债平衡型','R3',1001,1,4);
INSERT INTO fund_category(name,risk_level,fund_tot,status,show_order) values('偏债型','R2',1001,1,3);
INSERT INTO fund_category(name,risk_level,fund_tot,status,show_order) values('债券型','R1',1001,1,2);
INSERT INTO fund_category(name,risk_level,fund_tot,status,show_order) values('保本型','R1',1001,1,1);
INSERT INTO fund_category(name,risk_level,fund_tot,status,show_order) values('货币型','R1',1001,1,0); /* show_order=0,must be a type of currency fund*/


--5.fund manager
CREATE TABLE fund_manager(fm_id Integer primary key autoincrement, 
name varchar(30) not null comment '经理名',
status int not null comment '是否还在干这行',
remark varchar(1000), inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_manager(name,status,remark) values('张三疯',1,'经济学博士,CFA.我是三丰...不是三疯...'); /*--fm_id=1*/
INSERT INTO fund_manager(name,status,remark) values('阿瓦买提',1,'经济学**,CFA.我是买买提.'); /*--fm_id=2*/

--6.fund industry like manufacturing/finance/real estate/construction etc
CREATE TABLE fund_industry(fi_id Integer primary key autoincrement, 
name varchar(50) not null comment '基金行业');
INSERT INTO fund_industry(name) values('制造业');
INSERT INTO fund_industry(name) values('金融业');
INSERT INTO fund_industry(name) values('房地产业');
INSERT INTO fund_industry(name) values('农、林、牧、渔业');
INSERT INTO fund_industry(name) values('建筑业');
INSERT INTO fund_industry(name) values('其他');

--7.fund position like CMB/GREE etc
CREATE TABLE fund_stock(fs_id Integer primary key autoincrement, 
name varchar(50) not null comment '股票基金',
code varchar(20) not null comment '股票代码',
status int,remark varchar(100),inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_stock(name,code,status,remark) values('中国平安','601318.SH',1,'神秘代码'); --fs_id=1
INSERT INTO fund_stock(name,code,status,remark) values('招商银行','600036.SH',1,'神秘代码'); --fs_id=2

--8.fund customized category
CREATE TABLE fund_customized_category(fcc_id Integer primary key autoincrement,
name varchar(50) not null comment '定制化类型名称',
ico_color varchar(7) comment '定制化颜色');
INSERT INTO fund_customized_category(name,ico_color) values('量化派','#FE5D4D');
INSERT INTO fund_customized_category(name,ico_color) values('稳健派','#FE554D');
INSERT INTO fund_customized_category(name,ico_color) values('价值型','#737DDE');
INSERT INTO fund_customized_category(name,ico_color) values('主题型','#707DDE');
INSERT INTO fund_customized_category(name,ico_color) values('成长型','#3BA4FF');

--9.fund details share_bonus_type:0-现金分红,1-红利再投
CREATE TABLE fund_info(fid Integer primary key autoincrement, 
fc_id int not null comment '基金风险类型',
fcc_id int not null comment '自定义基金类型',
fund_name varchar(50) not null comment '名称', 
fund_code varchar(20) not null comment '代码',
fund_company varchar(50) not null comment '基金公司',
fund_assets varchar(30) not null comment '资产总额', 
start_date datetime not null comment '建立时间',
management_fee float not null comment '管理费',
custody_fee float not null comment '托管费',
purchase_rate_old float comment'老申购费率',
purchase_rate_new float not null comment '新申购费率',
purchase_rate_discount float comment '购买折扣率',
topn int(8) not null comment '排名',
init_amt float not null comment '最少购买金额',
sched_init_amt float not null comment '定投最少购买金额',
sched_invest_remark varchar(500) not null comment '定投备注', 
--sched_invest_freq_pre int(1) comment '定投频率,1-每周/2-每2周/3-每月',/*定投不应该放这里,应该有个个人定投信息表,每个人关联的个人信息都不一样*/
--sched_invest_freq_tail int(2) comment '定投频率,1或2,值7内;3值31内',
purchase_process varchar(500) not null comment '申购进度',
redemption_fee_remark varchar(500) not null comment '赎回费说明',
redemption_process varchar(500) not null comment '赎回进度',
redemption_position varchar(100) not null comment '赎回仓位',
agreement varchar(800) not null comment '协议',
share_bonus_type int not null comment '分红类型',
status int,remark varchar(500),inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_info(fc_id,fcc_id,fund_name,fund_code,fund_company,fund_assets,start_date,management_fee,custody_fee,purchase_rate_old,purchase_rate_new,purchase_rate_discount,topn,sched_invest_remark,
purchase_process,redemption_fee_remark,redemption_process,redemption_position,agreement,share_bonus_type,status,init_amt,remark,sched_init_amt) values(1,1,'景顺长城沪深300增强','000311','景顺长城基金','100亿','2016-10-01',0.3,0.08,0.012,0.0012,1,50,'定投规则:遇到节假日自动延迟到下一个交易日扣款',
'T日/T+1日/T+1当日净值更新后','赎回费率如下:','赎回流程','赎回份额','景顺长城的协议',0,1,2000,'景顺长城沪深300增强备注',10.00); /*-- fid=1*/
INSERT INTO fund_info(fc_id,fcc_id,fund_name,fund_code,fund_company,fund_assets,start_date,management_fee,custody_fee,purchase_rate_old,purchase_rate_new,purchase_rate_discount,topn,sched_invest_remark,
purchase_process,redemption_fee_remark,redemption_process,redemption_position,agreement,share_bonus_type,status,init_amt,remark,sched_init_amt) values(1,2,'富国新动力A','001508','富国','130亿','2016-10-01',0.26,0.07,0.01,0.001,1,60,'定投规则:遇到节假日自动延迟到下一个交易日扣款',
'T日/T+1日/T+1当日净值更新后','赎回费率如下:','赎回流程','赎回份额','景顺长城的协议',0,1,2200,'富国新动力A备注',11.00); /*-- fid=2*/
INSERT INTO fund_info(fc_id,fcc_id,fund_name,fund_code,fund_company,fund_assets,start_date,management_fee,custody_fee,purchase_rate_old,purchase_rate_new,purchase_rate_discount,topn,sched_invest_remark,
purchase_process,redemption_fee_remark,redemption_process,redemption_position,agreement,share_bonus_type,status,init_amt,remark,sched_init_amt) values(1,2,'富国新动力B','001507','富国','131亿','2016-10-11',0.26,0.07,0.01,0.001,1,57,'定投规则:遇到节假日自动延迟到下一个交易日扣款',
'T日/T+1日/T+1当日净值更新后','赎回费率如下:','赎回流程','赎回份额','景顺长城的协议',0,1,2300,'富国新动力B备注',11.00); /*-- fid=3*/
INSERT INTO fund_info(fc_id,fcc_id,fund_name,fund_code,fund_company,fund_assets,start_date,management_fee,custody_fee,purchase_rate_old,purchase_rate_new,purchase_rate_discount,topn,sched_invest_remark,
purchase_process,redemption_fee_remark,redemption_process,redemption_position,agreement,share_bonus_type,status,init_amt,remark,sched_init_amt) values(1,2,'富国新动力C','001507','富国','132亿','2016-10-12',0.26,0.07,0.01,0.001,1,52,'定投规则:遇到节假日自动延迟到下一个交易日扣款',
'T日/T+1日/T+1当日净值更新后','赎回费率如下:','赎回流程','赎回份额','景顺长城的协议',0,0,2400,'富国新动力C备注',31.00); /*-- fid=4*/
INSERT INTO fund_info(fc_id,fcc_id,fund_name,fund_code,fund_company,fund_assets,start_date,management_fee,custody_fee,purchase_rate_old,purchase_rate_new,purchase_rate_discount,topn,sched_invest_remark,
purchase_process,redemption_fee_remark,redemption_process,redemption_position,agreement,share_bonus_type,status,init_amt,remark,sched_init_amt) values(8,1,'天弘鸿运宝','001386','天弘','190亿','2015-10-01',0.3,0.08,0.012,0.0012,1,80,'定投规则:遇到节假日自动延迟到下一个交易日扣款',
'T日/T+1日/T+1当日净值更新后','赎回费率如下:','赎回流程','赎回份额','天弘鸿运宝的协议',0,1,2500,'天弘鸿运宝备注',51.00); /*-- fid=5*/
INSERT INTO fund_info(fc_id,fcc_id,fund_name,fund_code,fund_company,fund_assets,start_date,management_fee,custody_fee,purchase_rate_old,purchase_rate_new,purchase_rate_discount,topn,sched_invest_remark,
purchase_process,redemption_fee_remark,redemption_process,redemption_position,agreement,share_bonus_type,status,init_amt,remark,sched_init_amt) values(1,3,'景顺长城沪深200增强','000313','景顺长城基金','100亿','2016-10-01',0.3,0.08,0.012,0.0012,1,50,'定投规则:遇到节假日自动延迟到下一个交易日扣款',
'T日/T+1日/T+1当日净值更新后','赎回费率如下:','赎回流程','赎回份额','景顺长城的协议',0,1,2000,'景顺长城沪深200增强备注',10.00); /*-- fid=6*/
INSERT INTO fund_info(fc_id,fcc_id,fund_name,fund_code,fund_company,fund_assets,start_date,management_fee,custody_fee,purchase_rate_old,purchase_rate_new,purchase_rate_discount,topn,sched_invest_remark,
purchase_process,redemption_fee_remark,redemption_process,redemption_position,agreement,share_bonus_type,status,init_amt,remark,sched_init_amt) values(1,4,'景顺长城沪深100增强','000312','景顺长城基金','100亿','2016-10-01',0.3,0.08,0.012,0.0012,1,50,'定投规则:遇到节假日自动延迟到下一个交易日扣款',
'T日/T+1日/T+1当日净值更新后','赎回费率如下:','赎回流程','赎回份额','景顺长城的协议',0,1,2000,'景顺长城沪深100增强备注',10.00); /*-- fid=7*/

--10.fund bonus and split (bonus.type=0,split.type=1)
CREATE TABLE fund_bonus_split(fbs_id Integer primary key autoincrement,
fid int not null comment '基金id',
type int not null comment '基金分拆类型',
remark varchar(30),
amt float not null comment '基金分拆总额',
currency varchar(5) not null comment '货币类型',
inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_bonus_split(fid,type,remark,amt,currency) values(1,1,'单位分红',0.15,'元');
INSERT INTO fund_bonus_split(fid,type,remark,amt,currency) values(1,1,'单位分红',0.19,'元');

--11.fund redemption rate
CREATE TABLE fund_redemption_rate(frr_id Integer primary key autoincrement,
fid int not null comment '基金id',
hold_days int not null comment '基金持有时间',
rate float not null comment '利率');
INSERT INTO fund_redemption_rate(fid,hold_days,rate) values(1,7,1.5); /*--[0,7)*/
INSERT INTO fund_redemption_rate(fid,hold_days,rate) values(1,365,0.5); /*--[7,365)*/
INSERT INTO fund_redemption_rate(fid,hold_days,rate) values(1,730,0.0); /*--[365,730)*/

--12.fund manager matchs funds
CREATE TABLE fund_managers(fms_id Integer primary key autoincrement,
fid int not null comment '基金ID',
fm_id int not null comment '经理ID',
inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_managers(fid,fm_id) values(1,1); /*--景顺长城沪深300增强--张三疯*/
INSERT INTO fund_managers(fid,fm_id) values(1,2); /*--景顺长城沪深300增强--阿瓦买提*/
INSERT INTO fund_managers(fid,fm_id) values(2,1); /*--富国新动力A--张三疯*/
INSERT INTO fund_managers(fid,fm_id) values(3,1); /*--富国新动力B--阿瓦买提*/
INSERT INTO fund_managers(fid,fm_id) values(4,1); /*--富国新动力C--张三疯*/
INSERT INTO fund_managers(fid,fm_id) values(3,2); /*--富国新动力B--阿瓦买提*/
INSERT INTO fund_managers(fid,fm_id) values(5,1); /*--天弘鸿运宝--张三疯*/
INSERT INTO fund_managers(fid,fm_id) values(5,2); /*--天弘鸿运宝--阿瓦买提*/
INSERT INTO fund_managers(fid,fm_id) values(6,1); /*--景顺长城沪深200增强--张三疯*/
INSERT INTO fund_managers(fid,fm_id) values(7,2); /*--景顺长城沪深100增强--阿瓦买提*/

--13.fund managers and their fund history
CREATE TABLE fund_managers_history(fmh_id Integer primary key autoincrement,
fm_id int not null comment '经理ID',
fid int not null comment '基金ID',
review_num float comment '查看数',
hu_shen_300 float comment '沪深300',
inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_managers_history(fm_id,fid,review_num,hu_shen_300) values(1,1,10.52,-10.1);

--14.fund position, stock position
CREATE TABLE fund_position(fp_id Integer primary key autoincrement,
fid int not null comment '基金ID',
fs_id int not null comment '股票ID',
hold_num float not null comment '仓位',
inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_position(fid,fs_id,hold_num) values(1,1,752);/*--景顺长城沪深300增强-中国平安-7.52*/
INSERT INTO fund_position(fid,fs_id,hold_num) values(1,2,513);/*--景顺长城沪深300增强-招商银行-5.13*/

--15.fund postion, other position category
CREATE TABLE fund_position_other_category(fpoc_id Integer primary key autoincrement,name varchar(30) not null comment '持仓类型名');
INSERT INTO fund_position_other_category(name) values('债券');
INSERT INTO fund_position_other_category(name) values('银行存款');
INSERT INTO fund_position_other_category(name) values('其他');

--16.fund position, other position
CREATE TABLE fund_position_other(fpo_id Integer primary key autoincrement,
fid int not null comment '基金ID',
fpoc_id int not null comment '持仓类型',
hold_num float not null comment '仓位',
inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_position_other(fid,fpoc_id,hold_num) values(1,1,3.16);
INSERT INTO fund_position_other(fid,fpoc_id,hold_num) values(1,2,2.6);
INSERT INTO fund_position_other(fid,fpoc_id,hold_num) values(1,3,0.66);

--17.fund worth history
CREATE TABLE fund_worth_history(fwh_id Integer primary key autoincrement,
fid int not null comment '基金ID',
worth float not null comment '万份收益/净值',
daily_ratio float not null comment '七日年化/日涨跌幅',
inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_worth_history(fid,worth,daily_ratio,inserttime) values(1,2.195,-0.0137,'2020-07-10 12:28:58');
INSERT INTO fund_worth_history(fid,worth,daily_ratio,inserttime) values(1,1.1219,-0.0137,'2020-07-09 12:28:58');
INSERT INTO fund_worth_history(fid,worth,daily_ratio,inserttime) values(1,1.02,-0.0117,'2020-07-08 12:28:58');
INSERT INTO fund_worth_history(fid,worth,daily_ratio,inserttime) values(1,1.2296,-0.0107,'2020-07-07 12:28:58');
INSERT INTO fund_worth_history(fid,worth,daily_ratio,inserttime) values(2,2.01,-0.0137,'2020-07-10 12:28:58');
INSERT INTO fund_worth_history(fid,worth,daily_ratio,inserttime) values(3,1.72,-0.017,'2020-07-10 12:28:58');
INSERT INTO fund_worth_history(fid,worth,daily_ratio,inserttime) values(4,1.18,-0.0207,'2020-07-10 12:28:58');
INSERT INTO fund_worth_history(fid,worth,daily_ratio,inserttime) values(5,1.195,-0.0137,'2020-07-10 12:28:58');
INSERT INTO fund_worth_history(fid,worth,daily_ratio,inserttime) values(5,3.95,-0.0117,'2020-07-09 12:28:58');
INSERT INTO fund_worth_history(fid,worth,daily_ratio,inserttime) values(5,2.195,-0.0107,'2020-07-08 12:28:58');

/*--18.stage fund worth history*/
CREATE TABLE fund_worth_history_stage(fwhs_id Integer primary key autoincrement,
fid int not null comment '基金ID',
stage int not null comment '天数,7,30,90,365,365*2,365*3,365*5,99999',
worth float not null comment '涨跌幅',
topn int not null comment '同比排名',
his_tot int not null comment '历史总量',
inserttime timestamp default (datetime('now','localtime')),
updatetime timestamp default (datetime('now','localtime')));
INSERT INTO fund_worth_history_stage(fid,stage,worth,topn,his_tot) values(1,7,0.0223,122,1203); -- 景顺长城沪深300增强,7,0.0223,122,1203
INSERT INTO fund_worth_history_stage(fid,stage,worth,topn,his_tot) values(1,30,0.034,120,1200); -- 景顺长城沪深300增强,30,0.034,120,1200
INSERT INTO fund_worth_history_stage(fid,stage,worth,topn,his_tot) values(1,90,-0.011,120,1100); -- 景顺长城沪深300增强,90,-0.011,120,1100
INSERT INTO fund_worth_history_stage(fid,stage,worth,topn,his_tot) values(1,365,0.111,110,1100); -- 景顺长城沪深300增强,365,0.111,110,1100
INSERT INTO fund_worth_history_stage(fid,stage,worth,topn,his_tot) values(2,90,-0.011,120,1100); -- 富国新动力A,90,-0.011,120,1100
INSERT INTO fund_worth_history_stage(fid,stage,worth,topn,his_tot) values(3,365,0.111,110,1100); -- 富国新动力B,365,0.111,110,1100
INSERT INTO fund_worth_history_stage(fid,stage,worth,topn,his_tot) values(4,90,-0.011,120,1100); -- 富国新动力C,90,-0.011,120,1100
INSERT INTO fund_worth_history_stage(fid,stage,worth,topn,his_tot) values(5,365,0.111,110,1100); -- 天弘鸿运宝,365,0.111,110,1100
INSERT INTO fund_worth_history_stage(fid,stage,worth,topn,his_tot) values(6,90,-0.011,120,1100); -- 景顺长城沪深200增强,90,-0.011,120,1100
INSERT INTO fund_worth_history_stage(fid,stage,worth,topn,his_tot) values(7,365,0.111,110,1100); -- 景顺长城沪深100增强,365,0.111,110,1100

------------------------------------fund plans--biz:target,drumstick and best choice------------------------------------------------
/*--19.plan category*/
CREATE TABLE fund_plan_category(fpc_id Integer primary key autoincrement,
name varchar(20) not null comment '基金类型名称',
remark varchar(50));
INSERT INTO fund_plan_category(name,remark) values('活期理财','选哪个火鸡呢?天鸿?');
INSERT INTO fund_plan_category(name,remark) values('高成长股基组合','高高尔基');
INSERT INTO fund_plan_category(name,remark) values('稳健债基组合','稳健债基组合');
INSERT INTO fund_plan_category(name,remark) values('平衡性股基组合','平衡性股基组合');

--20.fund plan (returns_type:1-七日年化收益,2-近六月历史收益,3-近三年历史收益|page_type:1-only text or image,2-including FOFs etc.)
CREATE TABLE fund_plan(fpl_id Integer primary key autoincrement,
fpc_id int not null comment '基金类型id',
ft_id int not null comment '基金模板id',
name varchar(20) not null comment '基金计划名',
profit_ratio float not null comment '收益率',
profit_txt varchar(50) not null comment '收益描述',
loss_ratio float not null comment '历史最大亏损',
profit_type int comment '收益类型',
init_amt float not null comment '最少购买金额',
sched_init_amt float not null comment '定投最少购买金额',
purchase_rate_old float comment'老申购费率',
purchase_rate_new float not null comment '新申购费率',
purchase_rate_discount float comment '购买折扣率',
img_url varchar(200) not null comment '图片地址',
page_type int not null comment '图片or普通页面',
details varchar(500) not null comment '详细',
short_intro varchar(30) not null comment '简介',
is_sellout bool not null comment '是否售完',
join_num int not null comment '加入人数',
status int not null comment '是否可用',
inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_plan(fpc_id,ft_id,name,profit_ratio,profit_txt,loss_ratio,profit_type,init_amt,sched_init_amt,img_url,page_type,details,short_intro,remark,is_sellout,join_num,status,purchase_rate_new) 
values(1,9,'超级现金宝',2.8,'七日年化收益',0,1,100,0,'//images_url',1,'','','仅一张图片的页面',false,188,1,0.012);
INSERT INTO fund_plan(fpc_id,ft_id,name,profit_ratio,profit_txt,loss_ratio,profit_type,init_amt,sched_init_amt,img_url,page_type,details,short_intro,remark,is_sellout,join_num,status,purchase_rate_new) 
values(2,5,'全明星计划1',35.57,'七日年化收益',43.11,3,1001,5001,'//images_url',2,'组合详情:','跟对人买对基,实力派经理一网打尽','有基列表',false,1088,1,0.013);
INSERT INTO fund_plan(fpc_id,ft_id,name,profit_ratio,profit_txt,loss_ratio,profit_type,init_amt,sched_init_amt,img_url,page_type,details,short_intro,remark,is_sellout,join_num,status,purchase_rate_new) 
values(2,6,'全明星计划2',31.57,'七日年化收益',43.11,3,1002,502,'//images_url',2,'组合详情:','跟对人买对基,实力派经理一网打尽','有基列表',false,1808,1,0.014);
INSERT INTO fund_plan(fpc_id,ft_id,name,profit_ratio,profit_txt,loss_ratio,profit_type,init_amt,sched_init_amt,img_url,page_type,details,short_intro,remark,is_sellout,join_num,status,purchase_rate_new) 
values(3,7,'小确幸计划1',30.63,'近三年历史收益',18.24,3,1003,103,'//images_url',2,'组合详情:','精选债基组合,收益长赢','高尔基',false,1008,1,0.015);
INSERT INTO fund_plan(fpc_id,ft_id,name,profit_ratio,profit_txt,loss_ratio,profit_type,init_amt,sched_init_amt,img_url,page_type,details,short_intro,remark,is_sellout,join_num,status,purchase_rate_new) 
values(3,8,'小确幸计划2',31.63,'近三年历史收益',18.24,3,1004,104,'//images_url',2,'组合详情:','精选债基组合,收益长赢','高尔基',true,1080,1,0.016);
INSERT INTO fund_plan(fpc_id,ft_id,name,profit_ratio,profit_txt,loss_ratio,profit_type,init_amt,sched_init_amt,img_url,page_type,details,short_intro,remark,is_sellout,join_num,status,purchase_rate_new) 
values(4,10,'稳拿计划',30.63,'近三年历史收益',18.24,3,1005,105,'//images_url',2,'组合详情:','股债动态平衡,文件投资典范','高尔基',false,1808,1,0.017);

------------------------------------mine--biz:target and best choice------------------------------------------------
/*--21.service card (source:0-分享积得,1-购买,2-赠送,3-免费领取,4-友情援助;status:1-未使用,0-已使用;type:0-大目标服务卡,1-鸡腿券,2-高尔基)*/
CREATE TABLE user_card(uc_id Integer primary key autoincrement,
uid int not null comment '用户id',
name varchar(20) not null comment '卡名',
type int not null comment '卡类型' default 0,
source int not null comment '来源',
status int not null comment '状态',
exp_date_start datetime not null comment '有效期开始时间',
exp_date_end datetime not null comment '有效期结束时间',
inserttime timestamp default (datetime('now','localtime')));
INSERT INTO user_card(uid,name,type,source,status,exp_date_start,exp_date_end) values(1,'大目标服务卡',0,0,1,'2020-01-22','2022-01-22');
INSERT INTO user_card(uid,name,type,source,status,exp_date_start,exp_date_end) values(1,'大目标服务卡',0,0,1,'2020-01-22','2022-06-22');
INSERT INTO user_card(uid,name,type,source,status,exp_date_start,exp_date_end) values(1,'大目标服务卡',0,0,1,'2020-01-22','2020-05-22');
INSERT INTO user_card(uid,name,type,source,status,exp_date_start,exp_date_end) values(1,'加鸡腿服务卡',1,1,1,'2020-01-22','2022-01-22');

/*--22.bank information*/
CREATE TABLE bank(bid Integer primary key autoincrement,
name varchar(50) not null comment '银行名',
status int not null comment '是否可用',
remark varchar(500) comment '备注');
INSERT INTO bank(name,status,remark) values('包头银行',1,'硕鼠01');
INSERT INTO bank(name,status,remark) values('工商银行',1,'惹不起');
INSERT INTO bank(name,status,remark) values('建设银行',1,'基建狂魔的银行');
INSERT INTO bank(name,status,remark) values('天地银行',1,'天地良心');

/*--23.branch bank information*/
CREATE TABLE branch_bank(bbid Integer primary key autoincrement,
pid int not null comment '省份id',
cid int not null comment '城市id',
bid int not null comment '银行id',
name varchar(50) not null comment '分行名',
status int not null comment '是否可用',
policy varchar(100) comment '政策',
remark varchar(500) comment '备注');
INSERT INTO branch_bank(pid,cid,bid,name,status,policy,remark) values(1,1,1,'包头银行(帝都天门支行)',1,'单笔支付限额10万,日限额10万,月限额3000万','');
INSERT INTO branch_bank(pid,cid,bid,name,status,policy,remark) values(1,1,4,'天地银行(帝都门天支行)',1,'单笔支付限额11万,日限额11万,月限额3000万','');
INSERT INTO branch_bank(pid,cid,bid,name,status,policy,remark) values(1,2,2,'工商银行(都门天支行)',1,'单笔支付限额5万,日限额10万,月限额300万','');

/*--24.bank card number bankid*/
CREATE TABLE user_bank(ub_id Integer primary key autoincrement,
uid int not null comment '用户id',
card_number varchar(20) not null comment '卡号',
bid int not null comment '银行id',
bbid int not null comment '支行id',
pid int not null comment '省id',
cid int not null comment '市id',
leave_phonenumber varchar(15) not null comment '预留电话',
is_default int comment '是否默认');
INSERT INTO user_bank(uid,card_number,bid,bbid,pid,cid,leave_phonenumber,is_default) values(1,'520145687956235',1,1,1,1,'18856898989',0);
INSERT INTO user_bank(uid,card_number,bid,bbid,pid,cid,leave_phonenumber,is_default) values(1,'510145687956236',2,3,1,1,'18856898989',1);

/*--25.user news info*/
CREATE TABLE user_news_info(uni_id Integer primary key autoincrement,
uid int not null comment '用户id',
nc_id int not null comment '新闻分类',
nid int not null comment '新闻id', 
is_read int not null comment '是否已读,0-否,1-是'
inserttime timestamp default (datetime('now','localtime')),
updatetime timestamp default (datetime('now','localtime')));
INSERT INTO user_news_info(uid,nc_id,nid,is_read) values(1,3,7,0);
INSERT INTO user_news_info(uid,nc_id,nid,is_read) values(1,4,8,0);
INSERT INTO user_news_info(uid,nc_id,nid,is_read) values(1,5,9,0);

--26.user details
CREATE TABLE userdetail(uid Integer primary key autoincrement,
username varchar(30) not null comment '用户名',
nickname varchar(30) comment '昵称',
phonenumber varchar(30) not null comment '手机号',
password varchar(100) not null comment '密码',
is_fingerprint boolean comment '是否开启指纹解锁',
is_posture boolean comment '是否开启图形解锁',
is_fund_account boolean not null comment '是否开启了基金账户',
target_bouns_amt float not null comment '总资产',
sms varchar(30) comment '短信验证码',
avastar varchar(100) comment '头像',
token varchar(100) not null comment 'token',
inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO user_detail(username,nickname,phonenumber,password,is_fingerprint,is_posture,is_fund_account,target_bouns_amt,avastar,token) 
values('ladygaga','GAGA','18808988989','1383734cc13db894a26e184e8e66da87',true,false,false,385.95,'../../../../static/img/avastar.jpg','54b67780-c901-11ea-9b59-000c297cc28c');

--27.fund account (risk_level:1-稳健,2-保守...;tax_id:1-仅为中国税收居民,2-仅为非中国税收居民,3-既是中国税收居民也是其他国家(地区)税收居民);occupation:1-科研人员
CREATE TABLE user_fund_account(ufa_id Integer primary key autoincrement,real_name varchar(30),risk_level int,tax_id int,trade_password varchar(50),idcard_num varchar(20),
idcard_expdate datetime,address varchar(100),occupation int,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO user_fund_account(real_name,risk_level,tax_id,trade_password,idcard_num,idcard_expdate,address,occupation) values('张翠花',1,1,'YadnSEWOdwO09uwFepOe====','110221199202235460','2033-12-02','上海市南京东西路xxx号',1);

/*--28.user investion account
持仓盈亏=历史持仓盈亏+当日开仓持仓盈亏
持仓盈亏率=持仓盈亏/(初始投资金额+持仓盈亏)
每日涨跌幅=每日涨跌/(初始投资金额+持仓盈亏)
type:1-fpl_id-bestchoice,2-tid-大目标,3-fid-基金,4-did-鸡腿计划
*/
CREATE TABLE user_invest_account(uia_id int primary key autoincrement,
uid int not null comment '用户id',
type int(20) not null comment '类型,1-fpl_id-bestchoice,2-tid-大目标,3-fid-基金,4-did-鸡腿计划',
iv_id int not null comment '投资的id',
init_amt float not null comment '初始投资金额',
hold_profit float not null comment '持仓盈亏',
hold_status int(1) not null comment '是否持有0-否,1-是,2-赎回中',
is_sched int(1) not null comment '是否定投,0-非,1-是',
daily_profit float not null comment '每日涨/跌幅,根据每个基金每日涨跌计算得到',
inserttime timestamp default (datetime('now','localtime')),
updatetime timestamp default (datetime('now','localtime')));
INSERT INTO user_invest_account(uid,type,iv_id,init_amt,is_sched,daily_profit,hold_profit,hold_status) values(1,1,2,3500,0,-23.3,201,1);/*Bestchoice-全明星计划1*/
INSERT INTO user_invest_account(uid,type,iv_id,init_amt,is_sched,daily_profit,hold_profit,hold_status) values(1,1,2,500,1,-13.3,201.1,1);/*Bestchoice-全明星计划1-定投*/
INSERT INTO user_invest_account(uid,type,iv_id,init_amt,is_sched,daily_profit,hold_profit,hold_status) values(1,2,1,3200,0,33.3,-231,1);/*大目标-2006*/
INSERT INTO user_invest_account(uid,type,iv_id,init_amt,is_sched,daily_profit,hold_profit,hold_status) values(1,2,2,3100,0,33.3,231,2);/*大目标-2005*/
INSERT INTO user_invest_account(uid,type,iv_id,init_amt,is_sched,daily_profit,hold_profit,hold_status) values(1,2,3,3100,0,33.3,231,0);/*大目标-2004*/
INSERT INTO user_invest_account(uid,type,iv_id,init_amt,is_sched,daily_profit,hold_profit,hold_status) values(1,3,1,5000,0,33.3,421,1);/*基金-景顺长城沪深300增强*/
INSERT INTO user_invest_account(uid,type,iv_id,init_amt,is_sched,daily_profit,hold_profit,hold_status) values(1,3,1,5500,0,33.3,261,2);/*基金-景顺长城沪深300增强*/
INSERT INTO user_invest_account(uid,type,iv_id,init_amt,is_sched,daily_profit,hold_profit,hold_status) values(1,3,1,5000,1,33.3,221,1);/*基金-景顺长城沪深300增强-定投*/
INSERT INTO user_invest_account(uid,type,iv_id,init_amt,is_sched,daily_profit,hold_profit,hold_status) values(1,4,1,5000,1,33.3,201,0);/*鸡腿计划-???-定投*/


/*--29.user investion account detail - 大目标模板、鸡腿计划、优选最终拆为原子基*/
CREATE TABLE user_invest_account_detail(uiad_id int primary key autoincrement,
uia_id int not null comment 'user_invest_account.uia_id',
uid int not null comment '用户id',
fid varchar(20) not null comment '基金id',
hold_share float not null comment '持有份额,通过fund_plan_details.hold_percentage算出',
hold_status int(1) not null comment '持有状态,0-赎回到帐(已清仓),1-持仓,2-赎回中',
is_sched int(1) not null comment '是否定投,0-非,1-是',
daily_profit float not null comment '每日涨/跌幅,根据每个基金每日涨跌计算得到',
redeem_share float comment '赎回份额',
redeem_amt float comment '赎回金额',
redeem_date datetime comment '赎回时间',
pay_date datetime comment '支付时间',
inserttime timestamp default (datetime('now','localtime')),
updatetime timestamp default (datetime('now','localtime')));
INSERT INTO user_invest_account_detail(uia_id,uid,fid,hold_share,hold_status,is_sched,daily_profit,redeem_share,redeem_amt,redeem_date,pay_date) 
values(1,1,1,2000,1,0,-21.3,0,0,null,null); /*Bestchoice-全明星计划1,朕,景顺长城沪深300增强,2000份,持有,非定投,今日跌21.3元,赎回0份,赎回0元,null,null*/
INSERT INTO user_invest_account_detail(uia_id,uid,fid,hold_share,hold_status,is_sched,daily_profit,redeem_share,redeem_amt,redeem_date,pay_date)
values(1,1,2,2000,1,0,-21.3,0,0,null,null); /*Bestchoice-全明星计划1,朕,富国新动力A,2000份,持有,非定投,今日跌21.3元,赎回0份,赎回0元,null,null*/
INSERT INTO user_invest_account_detail(uia_id,uid,fid,hold_share,hold_status,is_sched,daily_profit,redeem_share,redeem_amt,redeem_date,pay_date)
values(1,1,3,2000,1,0,-21.3,0,0,null,null); /*Bestchoice-全明星计划1,朕,富国新动力B,2000份,持有,非定投,今日跌21.3元,赎回0份,赎回0元,null,null*/
INSERT INTO user_invest_account_detail(uia_id,uid,fid,hold_share,hold_status,is_sched,daily_profit,redeem_share,redeem_amt,redeem_date,pay_date)
values(2,1,3,301,1,1,-21.3,0,0,null,null); /*Bestchoice-全明星计划1,朕,富国新动力B,301份,持有,定投,今日跌21.3元,赎回0份,赎回0元,null,null*/
INSERT INTO user_invest_account_detail(uia_id,uid,fid,hold_share,hold_status,is_sched,daily_profit,redeem_share,redeem_amt,redeem_date,pay_date)
values(2,1,4,119,1,1,-21.3,0,0,null,null); /*Bestchoice-全明星计划1,朕,富国新动力C,200份,持有,定投,今日跌21.3元,赎回0份,赎回0元,null,null*/
INSERT INTO user_invest_account_detail(uia_id,uid,fid,hold_share,hold_status,is_sched,daily_profit,redeem_share,redeem_amt,redeem_date,pay_date)
-- tid->ft_id->fid
values(3,1,3,200,1,0,-21.3,0,0,null,null); /*大目标-2006,朕,富国新动力B,200份,持有,非定投,今日跌11.3元,赎回0份,赎回0元,null,null*/
INSERT INTO user_invest_account_detail(uia_id,uid,fid,hold_share,hold_status,is_sched,daily_profit,redeem_share,redeem_amt,redeem_date,pay_date)
values(3,1,2,201,1,0,-21.3,0,0,null,null); /*大目标-2006,朕,富国新动力A,201份,持有,非定投,今日跌20.3元,赎回0份,赎回0元,null,null*/
INSERT INTO user_invest_account_detail(uia_id,uid,fid,hold_share,hold_status,is_sched,daily_profit,redeem_share,redeem_amt,redeem_date,pay_date)
values(3,1,2,202,2,0,-21.3,0,0,'2020-03-20 10:20:22','2020-03-20 10:20:22'); /*大目标-2006,朕,富国新动力A,202份,赎回中,非定投,今日跌25.3元,赎回0份,赎回0元,null,null*/
INSERT INTO user_invest_account_detail(uia_id,uid,fid,hold_share,hold_status,is_sched,daily_profit,redeem_share,redeem_amt,redeem_date,pay_date)
values(3,1,4,205,1,0,-21.3,0,0,null,null); /*大目标-2006,朕,富国新动力A,205份,持有,非定投,今日跌18.3元,赎回0份,赎回0元,null,null*/
INSERT INTO user_invest_account_detail(uia_id,uid,fid,hold_share,hold_status,is_sched,daily_profit,redeem_share,redeem_amt,redeem_date,pay_date)
values(3,1,1,203,0,0,-21.3,0,0,'2020-03-20 10:20:22','2020-03-20 10:20:22'); /*大目标-2006,朕,景顺长城沪深300增强,203份,已清仓,非定投,今日跌22.3元,赎回20份,赎回230元,'2020-03-20 10:20:22','2020-03-20 10:20:22'*/
INSERT INTO user_invest_account_detail(uia_id,uid,fid,hold_share,hold_status,is_sched,daily_profit,redeem_share,redeem_amt,redeem_date,pay_date)
values(4,1,1,203,2,0,0,0,0,'2020-03-20 10:20:22','2020-03-20 10:20:22'); /*大目标-2005,朕,景顺长城沪深300增强,203份,赎回中,非定投,今日跌22.13元,赎回20份,赎回230元,'2020-03-20 10:20:22','2020-03-20 10:20:22'*/
INSERT INTO user_invest_account_detail(uia_id,uid,fid,hold_share,hold_status,is_sched,daily_profit,redeem_share,redeem_amt,redeem_date,pay_date)
values(5,1,1,203,0,0,0,0,0,'2020-03-20 10:20:22','2020-03-20 10:20:22'); /*大目标-2004,朕,景顺长城沪深300增强,203份,已清仓,非定投,今日跌22.13元,赎回20份,赎回230元,'2020-03-20 10:20:22','2020-03-20 10:20:22'*/

/*--30.user investion account*/
CREATE TABLE user_invest_account_log(uia_id Integer primary key autoincrement,
uid int not null comment '用户id',
type int(20) not null comment '类型,1-fpl_id-bestchoice,2-tid-大目标,3-fid-基金,4-did-鸡腿计划',
iv_id int not null comment '投资的id',
init_amt float not null comment '初始投资金额',
is_sched int(1) not null comment '是否定投,0-非,1-是',
daily_profit float not null comment '每日涨/跌幅,根据每个基金每日涨跌计算得到',
inserttime timestamp default (datetime('now','localtime')),
updatetime timestamp default (datetime('now','localtime')));
INSERT INTO user_invest_account_log(uid,type,iv_id,init_amt,is_sched,daily_profit) values(1,1,2,3500,0,-23.3);/*Bestchoice-全明星计划1*/
INSERT INTO user_invest_account_log(uid,type,iv_id,init_amt,is_sched,daily_profit) values(1,1,2,500,1,-13.3);/*Bestchoice-全明星计划1-定投*/
INSERT INTO user_invest_account_log(uid,type,iv_id,init_amt,is_sched,daily_profit) values(1,2,1,3200,0,33.3);/*大目标-2006*/
INSERT INTO user_invest_account_log(uid,type,iv_id,init_amt,is_sched,daily_profit) values(1,3,1,5000,0,33.3);/*基金-景顺长城沪深300增强*/
INSERT INTO user_invest_account_log(uid,type,iv_id,init_amt,is_sched,daily_profit) values(1,3,1,5000,1,33.3);/*基金-景顺长城沪深300增强-定投*/
INSERT INTO user_invest_account_log(uid,type,iv_id,init_amt,is_sched,daily_profit) values(1,3,1,5000,1,33.3);/*基金-景顺长城沪深300增强-定投*/
INSERT INTO user_invest_account_log(uid,type,iv_id,init_amt,is_sched,daily_profit) values(1,4,1,5000,1,33.3);/*鸡腿计划-???-定投*/

/*--31.fund template*/
CREATE TABLE fund_template(ft_id Integer primary key autoincrement,
tmp_name varchar(50) not null comment '基金模板名',
type int not null comment '类型,1-fpl_id-bestchoice,2-tid-大目标,3-fid-基金,4-did-鸡腿计划',
remark varchar(500),
version varchar(100) not null comment '版本号',
status int, 
inserttime timestamp default (datetime('now','localtime')));
-- 大目标
INSERT INTO fund_template(tmp_name,type,status,version,remark) values('2006聚能环01',2,1,'v1','2019年12月前表现不错');
INSERT INTO fund_template(tmp_name,type,status,version,remark) values('2006聚能环02',2,1,'v2','关注了神秘代码007');
INSERT INTO fund_template(tmp_name,type,status,version,remark) values('钻石王老五01',2,1,'v1','王老五护体');
INSERT INTO fund_template(tmp_name,type,status,version,remark) values('钻石王老五02',2,1,'v2','隔壁老王是钻石王老五');
-- best choice                          
INSERT INTO fund_template(tmp_name,type,status,version,remark) values('全明星计划1',1,1,'v1','全明星计划1');
INSERT INTO fund_template(tmp_name,type,status,version,remark) values('全明星计划2',1,1,'v2','全明星计划2');
INSERT INTO fund_template(tmp_name,type,status,version,remark) values('小确幸计划1',1,1,'v1','小确幸计划1');
INSERT INTO fund_template(tmp_name,type,status,version,remark) values('小确幸计划2',1,1,'v2','小确幸计划2');
INSERT INTO fund_template(tmp_name,type,status,version,remark) values('超级现金宝',1,1,'v1','超级现金宝');
INSERT INTO fund_template(tmp_name,type,status,version,remark) values('稳拿计划',1,1,'v1','稳拿计划');

/*--32.fund template and its funds*/
CREATE TABLE fund_templates(fts_id Integer primary key autoincrement,
ft_id int not null comment '基金模板id',
fid int not null comment '基金id',
hold_percentage float not null comment '持有投资占比',
remark varchar(500),
-- 大目标
inserttime timestamp default (datetime('now','localtime')));
INSERT INTO fund_templates(ft_id,fid,hold_percentage) values(1,1,0.41); -- 2006聚能环01,景顺长城沪深300增强,41%
INSERT INTO fund_templates(ft_id,fid,hold_percentage) values(1,2,0.44); -- 2006聚能环01,富国新动力A,44%
INSERT INTO fund_templates(ft_id,fid,hold_percentage) values(1,3,0.15); -- 2006聚能环01,富国新动力B,15%
INSERT INTO fund_templates(ft_id,fid,hold_percentage) values(2,2,1); -- 2006聚能环02,富国新动力A,44%
INSERT INTO fund_templates(ft_id,fid,hold_percentage) values(3,3,0.25); -- 钻石王老五01,富国新动力B,25%
INSERT INTO fund_templates(ft_id,fid,hold_percentage) values(3,2,0.25); -- 钻石王老五01,富国新动力A,25%
INSERT INTO fund_templates(ft_id,fid,hold_percentage) values(3,1,0.50); -- 钻石王老五01,景顺长城沪深300增强,50%
INSERT INTO fund_templates(ft_id,fid,hold_percentage) values(1,5,0.50); -- 2006聚能环01,天弘鸿运宝,100%
-- best choice
INSERT INTO fund_templates(ft_id,hold_percentage,fid) values(5,0.308,1); /*--全明星计划1-景顺长城沪深300增强,fid=1*/
INSERT INTO fund_templates(ft_id,hold_percentage,fid) values(5,0.142,2); /*--全明星计划1-富国新动力A,fid=2*/
INSERT INTO fund_templates(ft_id,hold_percentage,fid) values(5,0.15,3); /*--全明星计划1-富国新动力B,fid=3*/
INSERT INTO fund_templates(ft_id,hold_percentage,fid) values(5,0.30,4); /*--全明星计划1-富国新动力C,fid=4*/
INSERT INTO fund_templates(ft_id,hold_percentage,fid) values(5,0.10,7); /*--全明星计划1-景顺长城沪深100增强,fid=7*/
INSERT INTO fund_templates(ft_id,hold_percentage,fid) values(6,1.0,3); /*--全明星计划2-景顺长城沪深200增强,fid=3*/

------------------------------------target--biz:target------------------------------------------------
--33.target run_status:-1-流标,0-申请中,1-建仓中,2-盈利中,3-浮亏中,4-已达标,5已清仓 ,0<N<4->运行中
CREATE TABLE targets(tid Integer primary key autoincrement,
ft_id int not null comment '基金模板id',
name varchar(10) not null comment '模板名',
target_ratio float not null comment '目标收益率',
apply_starttime datetime not null comment '申请开始时间',
apply_endtime datetime not null comment '申请结束时间',
run_status int not null comment '运行状态',
run_days int not null comment '运行天数',
pre_run varchar(20) not null comment '预计运行时间',
fee_ratio float not null comment '买入费率' default 0,
init_amt float not null comment '最少购买金额',
inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO targets(name,ft_id,target_ratio,run_status,run_days,pre_run,fee_ratio,apply_starttime,apply_endtime,init_amt) values('2006',1,0.08,0,0, '6-12',0.00,'2020-04-07 10:10:00','2020-04-13 10:10:00',2000);-- 2006,2006聚能环01
INSERT INTO targets(name,ft_id,target_ratio,run_status,run_days,pre_run,fee_ratio,apply_starttime,apply_endtime,init_amt) values('2005',2,0.08,1,0, '6-12',0.00,'2020-04-01 10:10:00','2020-04-06 10:10:00',2100);-- 2005,2006聚能环02
INSERT INTO targets(name,ft_id,target_ratio,run_status,run_days,pre_run,fee_ratio,apply_starttime,apply_endtime,init_amt) values('2004',3,0.05,4,10,'5-12',0.00,'2020-03-24 10:10:00','2020-03-31 10:10:00',2200);-- 2004,钻石王老五01
INSERT INTO targets(name,ft_id,target_ratio,run_status,run_days,pre_run,fee_ratio,apply_starttime,apply_endtime,init_amt) values('2003',1,0.08,3,17,'5-12',0.00,'2020-03-16 10:10:00','2020-03-23 10:10:00',2300);
INSERT INTO targets(name,ft_id,target_ratio,run_status,run_days,pre_run,fee_ratio,apply_starttime,apply_endtime,init_amt) values('2002',2,0.07,4,40,'5-12',0.00,'2020-03-16 10:10:00','2020-03-23 10:10:00',2400);
INSERT INTO targets(name,ft_id,target_ratio,run_status,run_days,pre_run,fee_ratio,apply_starttime,apply_endtime,init_amt) values('2001',1,0.06,4,25,'5-12',0.00,'2020-03-16 10:10:00','2020-03-23 10:10:00',2500);
INSERT INTO targets(name,ft_id,target_ratio,run_status,run_days,pre_run,fee_ratio,apply_starttime,apply_endtime,init_amt) values('2000',2,0.05,4,34,'5-12',0.00,'2020-03-16 10:10:00','2020-03-23 10:10:00',2600);
INSERT INTO targets(name,ft_id,target_ratio,run_status,run_days,pre_run,fee_ratio,apply_starttime,apply_endtime,init_amt) values('1999',3,0.08,5,50,'5-12',0.00,'2020-03-16 10:10:00','2020-03-23 10:10:00',2700);

--34.history of daily target news,status:0-show,1-not show
CREATE TABLE target_history(th_id Integer primary key autoincrement,
tid int not null comment '大目标id',
title varchar(50) not null commment '标题', 
content varchar(1000) not null comment '内容',
status int not null comment '大目标状态' default 1,
inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO target_history(tid,title,content,status) values(1,'2月23日[大目标]投资播报','萌新们吓被股市吓坏了吧.',1);

--35.fund trade summary status:0-提前赎回,1-到期赎回
CREATE TABLE target_trade_summary(tts_id Integer primary key autoincrement,uid int,
tid int,bc_id int,invest_amt float,bonus_amt float,status int,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO target_trade_summery(uid,tid,bc_id,invest_amt,bonus_amt,status) values(1,1,1,3000,242.08,1);--Lady Gaga-2006期大目标-使用银行卡0005回款账号-投资3000-收益242.08-到期赎回

--36.fund trade body status:0-赎回中,1-已到账 /////////////todo, think again
CREATE TABLE target_trade_process(ttp_id Integer primary key autoincrement,
uid int comment '用户id',
fid int comment '基金id',
tid int comment '大目标id',
confirm_fund_amt float comment '确认份额',
confirm_date datetime comment '确认时间',
pay_date datetime comment '支付/成交时间',
inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO target_trade_process(uid,fid,tid,status,confirm_fund_amt,confirm_date,pay_date) 
values(1,2,1,2,340.85,'2020-02-21','2020-02-25');/*--Lady Gaga-景顺长城沪深300增强-大目标]1902-转换-转入237.36-转出*/

--37.fund trade history details  status:0-申购,1-分红,2-赎回; trade_status:1-已确认
CREATE TABLE target_trade_process_details1(ttpd1_id Integer primary key autoincrement,
uid int not null comment '用户id',
fid int not null comment '基金id',
tid int not null comment '大目标id',
bc_id int not null comment '优选id',
apply_amt float not null comment '申请时间',
confirm_worth float not null comment '确认单价',
confirm_portion float not null comment '确认份额',
charge float not null comment '收费', 
trade_status int not null comment '交易状态',
order_date datetime not null comment '订单日期',
pay_date datetime not null comment '支付日期',
confirm_date datetime not null comment '确认日期',
inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO target_trade_process_details1(uid,fid,tid,bc_id,apply_amt,confirm_worth,confirm_portion,charge,trade_status,order_date,pay_date,confirm_date) values(1,1,1,1,3000,1.0,3000,0.00,1,'2019-10-21 13:58:10','2019-10-21 13:58:10','2019-11-01 13:58:10');

--38.fund trade history details  status:0-申购,1-分红,2-赎回; trade_status:1-已确认
CREATE TABLE target_trade_process_details2(tthd2_id Integer primary key autoincrement,uid int,tid int,fid_in int,fid_out int,worth_out float,worth_in float,fund_portion_in float,fund_portion_out float,charge_in float,charge_out float,
trade_status_in int,trade_status_out int,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO target_trade_process_details2(uid,tid,fid_in,fid_out,worth_out,worth_in,fund_portion_in,fund_portion_out,charge_in,charge_out,trade_status_in,trade_status_out) values(1,1,1,2,1,1.0,1.26,188.3,237.26,0.00,1,1);

/*--39.province*/
CREATE TABLE province(pid Integer primary key autoincrement,
name varchar(20) not null comment '省名');
INSERT INTO province(name) values('帝都');
INSERT INTO province(name) values('魔都');
INSERT INTO province(name) values('废都');
INSERT INTO province(name) values('旧都');
INSERT INTO province(name) values('陪都');
INSERT INTO province(name) values('妖都');
INSERT INTO province(name) values('伪都');
INSERT INTO province(name) values('腐都');
INSERT INTO province(name) values('雌都');

/*--40.city*/
CREATE TABLE city(cid Integer primary key autoincrement,
pid int not null comment '省Id',
name varchar(30) not null comment '城市名');
INSERT INTO city(pid,name) values(1,'五年模拟区');
INSERT INTO city(pid,name) values(1,'三年高考区');
INSERT INTO city(pid,name) values(1,'东城区');
INSERT INTO city(pid,name) values(1,'西城区');
INSERT INTO city(pid,name) values(1,'南城区');
INSERT INTO city(pid,name) values(1,'北城区');