----------------------------------news and system info.--biz:news and AD and system info.--------------------------------------------------
--1.system info like banners/company introduction/about target/introduction of selecting funds etc.
CREATE TABLE system_info(id Integer primary key autoincrement ,title varchar(50), content varchar(1000), url varchar(200), img_url varchar(200), status int, inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO system_info(title, content, url, img_url, category, status) values('banner1','http://www.baidu.com/img/PCpad_bc531b595cf1e37c3907d14b69e3a2dd.png', 'http://www.baidu.com','http://www.baidu.com/img/PCpad_bc531b595cf1e37c3907d14b69e3a2dd.png',1,1);
INSERT INTO system_info(title, content, url, img_url, category, status) values('banner2','https://img.zcool.cn/community/01678c574d4f4832f875a429c5c234.jpg@1280w_1l_2o_100sh.jpg', 'http://www.baidu.com','https://img.zcool.cn/community/01678c574d4f4832f875a429c5c234.jpg@1280w_1l_2o_100sh.jpg',1,1);


--2.news type 
CREATE TABLE news_category(nc_id Integer primary key autoincrement,category_name varchar(50),status int);
INSERT INTO news_category(category_name, status) values('投资面对面',1);

--3.news details invester face to face/drumstick news/
CREATE TABLE news_info(nid Integer primary key autoincrement,nc_id int, title varchar(50), img_url varchar(200), content varchar(1000), status int, inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO news_info(title,nc_id,img_url, content, status) values('[大目标]2周年运行情况和当前市场分析',1,'/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png','我是分析君...哈哈哈',1);

----------------------------------fund details--biz:target,drumstick and best choice--------------------------------------------------
--4.fund category  like ETF/LOF/QDFII etc.
CREATE TABLE fund_category(fc_id Integer primary key autoincrement, name varchar(50), risk_level varchar(2),status int)
INSERT INTO fund_category(name,risk_level,status) values('股票型','R3',1); --fc_id=1
INSERT INTO fund_category(name,risk_level,status) values('指数型','R4',1);
INSERT INTO fund_category(name,risk_level,status) values('偏股型','R4',1);
INSERT INTO fund_category(name,risk_level,status) values('股债平衡型','R3',1);
INSERT INTO fund_category(name,risk_level,status) values('偏债型','R2',1);
INSERT INTO fund_category(name,risk_level,status) values('债券型','R1',1);
INSERT INTO fund_category(name,risk_level,status) values('保本型','R1',1);
INSERT INTO fund_category(name,risk_level,status) values('货币型','R1',1);

--5.fund manager
CREATE TABLE fund_manager(fm_id Integer primary key autoincrement, name varchar(30), status int, remark varchar(1000), inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_manager(name,status,remark) values('张三疯',1,'经济学博士,CFA.我是三丰...不是三疯...'); --fm_id=1
INSERT INTO fund_manager(name,status,remark) values('阿瓦买提',1,'经济学**,CFA.我是买买提.'); --fm_id=2

--6.fund industry like manufacturing/finance/real estate/construction etc
CREATE TABLE fund_industry(fi_id Integer primary key autoincrement, name varchar(50));
INSERT INTO fund_industry(name) values('制造业');
INSERT INTO fund_industry(name) values('金融业');
INSERT INTO fund_industry(name) values('房地产业');
INSERT INTO fund_industry(name) values('农、林、牧、渔业');
INSERT INTO fund_industry(name) values('建筑业');
INSERT INTO fund_industry(name) values('其他');

--7.fund position like CMB/GREE etc
CREATE TABLE fund_stock(fs_id Integer primary key autoincrement, name varchar(50), status int, code varchar(20),remark varchar(100),inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_stock(name,code,status,remark) values('中国平安','601318.SH',1,'神秘代码'); --fs_id=1
INSERT INTO fund_stock(name,code,status,remark) values('招商银行','600036.SH',1,'神秘代码'); --fs_id=2

--8.fund customized category
CREATE TABLE fund_customized_category(fcc_id Integer primary key autoincrement,name varchar(50),ico_color varchar(7));
INSERT INTO fund_customized_category(name,ico_color) values('量化派','#FE5D4D');
INSERT INTO fund_customized_category(name,ico_color) values('稳健派','#FE554D');
INSERT INTO fund_customized_category(name,ico_color) values('价值型','#737DDE');
INSERT INTO fund_customized_category(name,ico_color) values('主题型','#707DDE');
INSERT INTO fund_customized_category(name,ico_color) values('成长型','#3BA4FF');

--9.fund details share_bonus_type:0-现金分红,1-红利再投
CREATE TABLE fund_info(fid Integer primary key autoincrement, fc_id int, fcc_id int,fund_name varchar(50), fund_code varchar(20),fund_company varchar(50),fund_assets varchar(30), 
start_date datetime,management_fee float,custody_fee float,purchase_rate_old float,purchase_rate_new float,purchase_rate_discount float,sched_invest_remark varchar(500),
purchase_process varchar(500),redemption_fee_remark varchar(500),redemption_process varchar(500),redemption_position varchar(100),agreement varchar(800),share_bonus_type int,
remark varchar(500),inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_info(fc_id,fcc_id,fund_name,fund_code,fund_company,fund_assets,start_date,management_fee,custody_fee,purchase_rate_old,purchase_rate_new,purchase_rate_discount,sched_invest_remark,
purchase_process,redemption_fee_remark,redemption_process,redemption_position,agreement,share_bonus_type,remark) values(1,1,'景顺长城沪深300增强','000311','景顺长城基金','100亿','2016-10-01',0.3,0.08,0.012,0.0012,1,'定投规则:遇到节假日自动延迟到下一个交易日扣款',
'T日/T+1日/T+1当日净值更新后','赎回费率如下:','赎回流程','赎回份额','景顺长城的协议',0,'景顺长城沪深300增强备注'); -- fid=1
INSERT INTO fund_info(fc_id,fcc_id,fund_name,fund_code,fund_company,fund_assets,start_date,management_fee,custody_fee,purchase_rate_old,purchase_rate_new,purchase_rate_discount,sched_invest_remark,
purchase_process,redemption_fee_remark,redemption_process,redemption_position,agreement,share_bonus_type,remark) values(1,2,'富国新动力A','001508','富国','130亿','2016-10-01',0.26,0.07,0.01,0.001,1,'定投规则:遇到节假日自动延迟到下一个交易日扣款',
'T日/T+1日/T+1当日净值更新后','赎回费率如下:','赎回流程','赎回份额','景顺长城的协议',0,'富国新动力A备注'); -- fid=2

--10.fund bonus and split (bonus.type=0,split.type=1)
CREATE TABLE fund_bonus_split(fbs_id Integer primary key autoincrement,fid int,type int,remark varchar(30),amt float,currency varchar(5),inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_bonus_split(fid,type,remark,amt,currency) values(1,1,'单位分红',0.15,'元');
INSERT INTO fund_bonus_split(fid,type,remark,amt,currency) values(1,1,'单位分红',0.19,'元');

--11.fund redemption rate
CREATE TABLE fund_redemption_rate(frr_id Integer primary key autoincrement,fid int,hold_days int,rate float);
INSERT INTO fund_redemption_rate(fid,hold_days,rate) values(1,7,1.5); --[0,7)
INSERT INTO fund_redemption_rate(fid,hold_days,rate) values(1,365,0.5); --[7,365)
INSERT INTO fund_redemption_rate(fid,hold_days,rate) values(1,730,0.0); --[365,730)

--12.fund manager matchs funds
CREATE TABLE fund_managers(fms_id Integer primary key autoincrement,fid int, fm_id int,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_managers(fid,fm_id) values(1,1); --景顺长城沪深300增强--张三疯
INSERT INTO fund_managers(fid,fm_id) values(1,2); --景顺长城沪深300增强--阿瓦买提

--13.fund managers and their fund history
CREATE TABLE fund_managers_history(fmh_id Integer primary key autoincrement,fm_id int,fid int,review_num float,hu_shen_300 float,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_managers_history(fm_id,fid,review_num,hu_shen_300) values(1,1,10.52,-10.1);

--14.fund position, stock position
CREATE TABLE fund_position(fp_id Integer primary key autoincrement,fid int, fs_id int,hold_num float,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_position(fid,fs_id,hold_num) values(1,1,752);--景顺长城沪深300增强-中国平安-7.52
INSERT INTO fund_position(fid,fs_id,hold_num) values(1,2,513);--景顺长城沪深300增强-招商银行-5.13

--15.fund postion, other position category
CREATE TABLE fund_position_other_category(fpoc_id Integer primary key autoincrement,name varchar(30));
INSERT INTO fund_position_other_category(name) values('债券');
INSERT INTO fund_position_other_category(name) values('银行存款');
INSERT INTO fund_position_other_category(name) values('其他');

--16.fund position, other position
CREATE TABLE fund_position_other(fpo_id Integer primary key autoincrement,fid int, fpoc_id int,hold_num float,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_position_other(fid,fpoc_id,hold_num) values(1,1,3.16);
INSERT INTO fund_position_other(fid,fpoc_id,hold_num) values(1,2,2.6);
INSERT INTO fund_position_other(fid,fpoc_id,hold_num) values(1,3,0.66);

--17.fund worth history
CREATE TABLE fund_worth_history(fwh_id Integer primary key autoincrement,fid int,worth float,daily_change float,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_worth_history(fid,worth,daily_change) values(1,2.195,-3.37);

------------------------------------fund plans--biz:target,drumstick and best choice------------------------------------------------
--18.fund plan (returns_type:1-七日年化收益,2-近六月历史收益,3-近三年历史收益|page_type:1-only text or image,2-including FOFs etc.)
CREATE TABLE fund_plan(fpl_id Integer primary key autoincrement,name varchar(20),returns float,loss float,returns_type int,threshold float,sched_threshold float,img_url varchar(200),
page_type int,details varchar(500),short_intro varchar(30),remark varchar(200),inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_plan(name,returns,loss,returns_type,threshold,sched_threshold,img_url,page_type,details,short_intro,remark) values('超级现金宝',2.8,0,1,100,0,'//images_url',1,'','','仅一张图片的页面');
INSERT INTO fund_plan(name,returns,loss,returns_type,threshold,sched_threshold,img_url,page_type,details,short_intro,remark) values('全明星计划',35.57,43.11,3,1000,500,'//images_url',2,'组合详情:','跟对人买对基,实力派经理一网打尽','有基列表');
INSERT INTO fund_plan(name,returns,loss,returns_type,threshold,sched_threshold,img_url,page_type,details,short_intro,remark) values('海投计划',30.63,18.24,3,1000,100,'//images_url',2,'组合详情:','全球资产配置,把握更多投资机会','高尔基');

--19.fund plan details
CREATE TABLE fund_plan_details(fpd_id Integer primary key autoincrement,fpl_id int,fid int,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_plan_details(fpl_id,fid) values(2,1); --全明星计划-景顺长城沪深300增强,fpid_id=1
INSERT INTO fund_plan_details(fpl_id,fid) values(2,2); --全明星计划-富国新动力A,fpid_id=2
INSERT INTO fund_plan_details(fpl_id,fid) values(3,2); --海投计划-富国新动力A,fpid_id=3

--20.combining plan
CREATE TABLE plan_combin(pc_id Integer primary key autoincrement,name varchar(20),remark varchar(50));
INSERT INTO plan_combin(name,remark) values('活期理财','选哪个火鸡呢?天鸿?');
INSERT INTO plan_combin(name,remark) values('高成长股基组合','高高尔基');

--21.fund plans match combining plans  N:N, status:0-useless,1-using
CREATE TABLE fund_plan_combin(fpc_id Integer primary key autoincrement,pc_id int,fpd_id int,status int,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_plan_combin(pc_id,fpd_id,status) values(2,1,1); --高成长股基组合-全明星计划
INSERT INTO fund_plan_combin(pc_id,fpd_id,status) values(2,3,1); --高成长股基组合-海投计划

------------------------------------mine--biz:target and best choice------------------------------------------------
--22.user details
CREATE TABLE userdetail(uid Integer primary key autoincrement,username varchar(30),nickname varchar(30),phonenumber varchar(30),password varchar(100),is_fingerprint boolean,
is_posture boolean,is_fund_account boolean,target_bouns_amt float,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO userdetail(username,nickname,phonenumber,password,is_fingerprint,is_posture,is_fund_account,target_bouns_amt) values('Lady Gaga','GAGA','18808988989','YadnSEWOdwO09uwFepOe====',true,false,false,385.95);

--23.fund account (risk_level:1-稳健,2-保守...;tax_id:1-仅为中国税收居民,2-仅为非中国税收居民,3-既是中国税收居民也是其他国家(地区)税收居民);occupation:1-科研人员
CREATE TABLE user_fund_account(ufa_id Integer primary key autoincrement,real_name varchar(30),risk_level int,tax_id int,trade_password varchar(50),idcard_num varchar(20),
idcard_expdate datetime,address varchar(100),occupation int,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO user_fund_account(real_name,risk_level,tax_id,trade_password,idcard_num,idcard_expdate,address,occupation) values('张翠花',1,1,'YadnSEWOdwO09uwFepOe====','110221199202235460','2033-12-02','上海市南京东西路xxx号',1);

--24.service card (source:1-购买,2-赠送,3-免费领取,4-友情援助;status:1-未使用,0-已使用)
CREATE TABLE user_bank(uc_id Integer primary key autoincrement,name varchar(20),source int,status int,exp_date_start datetime,exp_date_end datetime,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO user_bank(name,source,status,exp_date_start,exp_date_end) values('大目标服务卡',1,1,'2020-01-22','2022-01-22');
INSERT INTO user_bank(name,source,status,exp_date_start,exp_date_end) values('加鸡腿服务卡',1,1,'2020-01-22','2022-01-22');

--25.bank information
CREATE TABLE bank(bid Integer primary key autoincrement,name varchar(50));
CREATE TABLE branch_bank(bbid Integer primary key autoincrement,bid int,name varchar(50));

--26./27.province/city
CREATE TABLE province(pid Integer primary key autoincrement,name varchar(20));
CREATE TABLE city(cid Integer primary key autoincrement,pid int,name varchar(30));

--28.bank card number bankid
CREATE TABLE user_bank(ub_id Integer primary key autoincrement,uid int,card_number varchar(20),bid int,bbid int,pid int,cid int,leave_phonenumber varchar(15));
INSERT INTO user_bank(uid,card_number,bid,bbid,pid,cid,leave_phonenumber) values(1,'520145687956235',1,1,1,1,'18856898989');
------------------------------------target--biz:target------------------------------------------------
--29.target run_status:-1-流标,0-申请中,1-建仓中,2-盈利中,3-浮亏中,4-已达标,5已清仓 ,0<N<4->运行中
CREATE TABLE targets(tid Integer primary key autoincrement,name varchar(10),target_ratio float,run_status int,run_days int,pre_run varchar(20),apply_starttime datetime,apply_endtime datetime,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO targets(name,target_ratio,run_status,run_days,pre_run,apply_starttime,apply_endtime) values('2006',0.08,0,0,'6-12','2020-04-07 10:10:00','2020-04-13 10:10:00');
INSERT INTO targets(name,target_ratio,run_status,run_days,pre_run,apply_starttime,apply_endtime) values('2005',0.08,1,0,'6-12','2020-04-01 10:10:00','2020-04-06 10:10:00');
INSERT INTO targets(name,target_ratio,run_status,run_days,pre_run,apply_starttime,apply_endtime) values('2004',0.05,2,10,'5-12','2020-03-24 10:10:00','2020-03-31 10:10:00');
INSERT INTO targets(name,target_ratio,run_status,run_days,pre_run,apply_starttime,apply_endtime) values('2003',0.08,3,17,'5-12','2020-03-16 10:10:00','2020-03-23 10:10:00');
INSERT INTO targets(name,target_ratio,run_status,run_days,pre_run,apply_starttime,apply_endtime) values('2002',0.07,4,40,'5-12','2020-03-16 10:10:00','2020-03-23 10:10:00');
INSERT INTO targets(name,target_ratio,run_status,run_days,pre_run,apply_starttime,apply_endtime) values('2001',0.06,4,25,'5-12','2020-03-16 10:10:00','2020-03-23 10:10:00');
INSERT INTO targets(name,target_ratio,run_status,run_days,pre_run,apply_starttime,apply_endtime) values('2000',0.05,4,34,'5-12','2020-03-16 10:10:00','2020-03-23 10:10:00');
INSERT INTO targets(name,target_ratio,run_status,run_days,pre_run,apply_starttime,apply_endtime) values('1999',0.08,5,50,'5-12','2020-03-16 10:10:00','2020-03-23 10:10:00');

--30.target and its funds
CREATE TABLE target_funds(tf_id Integer primary key autoincrement,fid int,amt float,last_returns float,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO target_funds(fid,amt,last_returns) values(1,2478.63,4.51);

--31.history of daily target news,status:0-show,1-not show
CREATE TABLE target_history(th_id Integer primary key autoincrement,tid int,title varchar(50), content varchar(1000),status int,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO target_history(tid,title,content,status) values(1,'2月23日[大目标]投资播报','萌新们吓被股市吓坏了吧.',1);

--32.fund trade summery status:0-提前赎回,1-到期赎回
CREATE TABLE target_trade_summery(tts_id Integer primary key autoincrement,uid int,tid int,bc_id int,invest_amt float,bonus_amt float,status int,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO target_trade_summery(uid,tid,bc_id,invest_amt,bonus_amt,status) values(1,1,1,3000,242.08,1);--Lady Gaga-2006期大目标-使用银行卡0005回款账号-投资3000-收益242.08-到期赎回

--33.fund trade body status:0-赎回中,1-已到账
CREATE TABLE target_trade_process(ttp_id Integer primary key autoincrement,uid int,fid int,tt_id int,tid int,status int,confirm_fund_amt float,confirm_date datetime,pay_date datetime,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO target_trade_process(uid,fid,tt_id,tid,status,confirm_fund_amt,confirm_date,pay_date) values(1,2,1,1,2,340.85,'2020-02-21','2020-02-25');--Lady Gaga-景顺长城沪深300增强-天弘弘运宝A-1-[大目标]1902-转换-转入237.36-转出

--34.fund trade history details  status:0-申购,1-分红,2-赎回; trade_status:1-已确认
CREATE TABLE target_trade_process_details1(ttpd1_id Integer primary key autoincrement,uid int,fid int,tid int,bc_id int,apply_amt float,confirm_worth float,confirm_portion float,charge float, trade_status int,
order_date datetime,pay_date datetime,confirm_date datetime,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO target_trade_process_details1(uid,fid,tid,bc_id,apply_amt,confirm_worth,confirm_portion,charge,trade_status,order_date,pay_date,confirm_date) values(1,1,1,1,3000,1.0,3000,0.00,1,'2019-10-21 13:58:10','2019-10-21 13:58:10','2019-11-01 13:58:10');

--35.fund trade history details  status:0-申购,1-分红,2-赎回; trade_status:1-已确认
CREATE TABLE target_trade_process_details2(tthd2_id Integer primary key autoincrement,uid int,tid int,fid_in int,fid_out int,worth_out float,worth_in float,fund_portion_in float,fund_portion_out float,charge_in float,charge_out float,
trade_status_in int,trade_status_out int,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO target_trade_process_details2(uid,tid,fid_in,fid_out,worth_out,worth_in,fund_portion_in,fund_portion_out,charge_in,charge_out,trade_status_in,trade_status_out) values(1,1,1,2,1,1.0,1.26,188.3,237.26,0.00,1,1);