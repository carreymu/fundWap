----------------------------------news and system info.--biz:news and AD and system info.--------------------------------------------------
--1.system info like banners/company introduction/about target/introduction of selecting funds etc.
CREATE TABLE system_info(id Integer primary key autoincrement ,title varchar(50), content varchar(1000), status int, inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO system_info(title, content, status) values('��˾����','�Ҿ����Ҳ�һ�����̻�',1);

--2.news type 
CREATE TABLE news_category(nc_id Integer primary key autoincrement,category_name varchar(50),status int,inserttime datetime);
INSERT INTO news_category(category_name, status) values('Ͷ�������',1);

--3.news details invester face to face/drumstick news/
CREATE TABLE news_info(nid Integer primary key autoincrement,nc_id int, title varchar(50), img_url varchar(200), content varchar(1000), status int, inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO news_info(title,nc_id,img_url, content, status) values('[��Ŀ��]2������������͵�ǰ�г�����',1,'/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png','���Ƿ�����...������',1);

----------------------------------fund details--biz:target,drumstick and best choice--------------------------------------------------
--4.fund category  like ETF/LOF/QDFII etc.
CREATE TABLE fund_category(fc_id Integer primary key autoincrement, name varchar(50), risk_level varchar(2),status int)
INSERT INTO fund_category(name,risk_level,status) values('��Ʊ��','R3',1); --fc_id=1
INSERT INTO fund_category(name,risk_level,status) values('ָ����','R4',1);
INSERT INTO fund_category(name,risk_level,status) values('ƫ����','R4',1);
INSERT INTO fund_category(name,risk_level,status) values('��ծƽ����','R3',1);
INSERT INTO fund_category(name,risk_level,status) values('ƫծ��','R2',1);
INSERT INTO fund_category(name,risk_level,status) values('ծȯ��','R1',1);
INSERT INTO fund_category(name,risk_level,status) values('������','R1',1);
INSERT INTO fund_category(name,risk_level,status) values('������','R1',1);

--5.fund manager
CREATE TABLE fund_manager(fm_id Integer primary key autoincrement, name varchar(30), status int, remark varchar(1000), inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_manager(name,status,remark) values('������',1,'����ѧ��ʿ,CFA.��������...��������...'); --fm_id=1
INSERT INTO fund_manager(name,status,remark) values('��������',1,'����ѧ**,CFA.����������.'); --fm_id=2

--6.fund industry like manufacturing/finance/real estate/construction etc
CREATE TABLE fund_industry(fi_id Integer primary key autoincrement, name varchar(50));
INSERT INTO fund_industry(name) values('����ҵ');
INSERT INTO fund_industry(name) values('����ҵ');
INSERT INTO fund_industry(name) values('���ز�ҵ');
INSERT INTO fund_industry(name) values('ũ���֡�������ҵ');
INSERT INTO fund_industry(name) values('����ҵ');
INSERT INTO fund_industry(name) values('����');

--7.fund position like CMB/GREE etc
CREATE TABLE fund_stock(fs_id Integer primary key autoincrement, name varchar(50), status int, code varchar(20),remark varchar(100),inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_stock(name,status,code,remark) values('�й�ƽ��','601318.SH',1,'���ش���'); --fs_id=1
INSERT INTO fund_stock(name,status,code,remark) values('��������','600036.SH',1,'���ش���'); --fs_id=2

--8.fund customized category
CREATE TABLE fund_customized_category(fcc_id Integer primary key autoincrement,name varchar(50),ico_color varchar(7));
INSERT INTO fund_customized_category(name,ico_color) values('������','#FE5D4D');
INSERT INTO fund_customized_category(name,ico_color) values('�Ƚ���','#FE554D');
INSERT INTO fund_customized_category(name,ico_color) values('��ֵ��','#737DDE');
INSERT INTO fund_customized_category(name,ico_color) values('������','#707DDE');
INSERT INTO fund_customized_category(name,ico_color) values('�ɳ���','#3BA4FF');

--9.fund details share_bonus_type:0-�ֽ�ֺ�,1-������Ͷ
CREATE TABLE fund_info(fid Integer primary key autoincrement, fc_id int, fcc_id int,fund_name varchar(50), fund_code varchar(20),fund_company varchar(50),fund_assets varchar(30), 
start_date datetime,management_fee float,custody_fee float,purchase_rate_old float,purchase_rate_new float,purchase_rate_discount float,sched_invest_remark varchar(500),
purchase_process varchar(500),redemption_fee_remark varchar(500),redemption_process varchar(500),redemption_position varchar(100),agreement varchar(800),share_bonus_type int,
remark varchar(500),inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_info(fc_id,fcc_id,fund_name,fund_code,fund_company,fund_assets,start_date,management_fee,custody_fee,purchase_rate_old,purchase_rate_new,purchase_rate_discount,sched_invest_remark,
purchase_process,redemption_fee_remark,redemption_process,redemption_position,agreement,share_bonus_type,remark) values(1,1,'��˳���ǻ���300��ǿ','000311','��˳���ǻ���','100��','2016-10-01',0.3,0.08,0.012,0.0012,1,'��Ͷ����:�����ڼ����Զ��ӳٵ���һ�������տۿ�',
'T��/T+1��/T+1���վ�ֵ���º�','��ط�������:','�������','��طݶ�','��˳���ǵ�Э��',0,'��˳���ǻ���300��ǿ��ע'); -- fid=1
INSERT INTO fund_info(fc_id,fcc_id,fund_name,fund_code,fund_company,fund_assets,start_date,management_fee,custody_fee,purchase_rate_old,purchase_rate_new,purchase_rate_discount,sched_invest_remark,
purchase_process,redemption_fee_remark,redemption_process,redemption_position,agreement,share_bonus_type,remark) values(1,2,'�����¶���A','001508','����','130��','2016-10-01',0.26,0.07,0.01,0.001,1,'��Ͷ����:�����ڼ����Զ��ӳٵ���һ�������տۿ�',
'T��/T+1��/T+1���վ�ֵ���º�','��ط�������:','�������','��طݶ�','��˳���ǵ�Э��',0,'�����¶���A��ע'); -- fid=2

--10.fund bonus and split (bonus.type=0,split.type=1)
CREATE TABLE fund_bonus_split(fbs_id Integer primary key autoincrement,fid int,type int,remark varchar(30),amt float,currency varchar(5),inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_bonus_split(fid,type,remark,amt,currency) values(1,1,'��λ�ֺ�',0.15,'Ԫ');
INSERT INTO fund_bonus_split(fid,type,remark,amt,currency) values(1,1,'��λ�ֺ�',0.19,'Ԫ');

--11.fund redemption rate
CREATE TABLE fund_redemption_rate(frr_id Integer primary key autoincrement,fid int,hold_days int,rate float);
INSERT INTO fund_redemption_rate(fid,hold_days,rate) values(1,7,1.5); --[0,7)
INSERT INTO fund_redemption_rate(fid,hold_days,rate) values(1,365,0.5); --[7,365)
INSERT INTO fund_redemption_rate(fid,hold_days,rate) values(1,730,0.0); --[365,730)

--12.fund manager matchs funds
CREATE TABLE fund_managers(fms_id Integer primary key autoincrement,fid int, fm_id int,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_managers(fid,fm_id) values(1,1); --��˳���ǻ���300��ǿ--������
INSERT INTO fund_managers(fid,fm_id) values(1,2); --��˳���ǻ���300��ǿ--��������

--13.fund managers and their fund history
CREATE TABLE fund_managers_history(fmh_id Integer primary key autoincrement,fm_id int,fid int,review_num float,hu_shen_300 float,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_managers_history(fm_id,fid,review_num,hu_shen_300) values(1,1,10.52,-10.1);

--14.fund position, stock position
CREATE TABLE fund_position(fp_id Integer primary key autoincrement,fid int, fs_id int,hold_num float,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_position(fid,fs_id,hold_num) values(1,1,752);--��˳���ǻ���300��ǿ-�й�ƽ��-7.52
INSERT INTO fund_position(fid,fs_id,hold_num) values(1,2,513);--��˳���ǻ���300��ǿ-��������-5.13

--15.fund postion, other position category
CREATE TABLE fund_position_other_category(fpoc_id Integer primary key autoincrement,name varchar(30));
INSERT INTO fund_position_other_category(name) values('ծȯ');
INSERT INTO fund_position_other_category(name) values('���д��');
INSERT INTO fund_position_other_category(name) values('����');

--16.fund position, other position
CREATE TABLE fund_position_other(fpo_id Integer primary key autoincrement,fid int, fpoc_id int,hold_num float,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_position_other(fid,fpoc_id,hold_num) values(1,1,3.16);
INSERT INTO fund_position_other(fid,fpoc_id,hold_num) values(1,2,2.6);
INSERT INTO fund_position_other(fid,fpoc_id,hold_num) values(1,3,0.66);

--17.fund worth history
CREATE TABLE fund_worth_history(fwh_id Integer primary key autoincrement,fid int,worth float,daily_change float,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_worth_history(fid,worth,daily_change) values(1,2.195,-3.37);

------------------------------------fund plans--biz:target,drumstick and best choice------------------------------------------------
--18.fund plan (returns_type:1-�����껯����,2-��������ʷ����,3-��������ʷ����|page_type:1-only text or image,2-including FOFs etc.)
CREATE TABLE fund_plan(fpl_id Integer primary key autoincrement,name varchar(20),returns float,loss float,returns_type int,threshold float,sched_threshold float,img_url varchar(200),
page_type int,details varchar(500),short_intro varchar(30),remark varchar(200),inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_plan(name,returns,loss,returns_type,threshold,sched_threshold,img_url,page_type,details,short_intro,remark) values('�����ֽ�',2.8,0,1,100,0,'//images_url',1,'','','��һ��ͼƬ��ҳ��');
INSERT INTO fund_plan(name,returns,loss,returns_type,threshold,sched_threshold,img_url,page_type,details,short_intro,remark) values('ȫ���Ǽƻ�',35.57,43.11,3,1000,500,'//images_url',2,'�������:','��������Ի�,ʵ���ɾ���һ����','�л��б�');
INSERT INTO fund_plan(name,returns,loss,returns_type,threshold,sched_threshold,img_url,page_type,details,short_intro,remark) values('��Ͷ�ƻ�',30.63,18.24,3,1000,100,'//images_url',2,'�������:','ȫ���ʲ�����,���ո���Ͷ�ʻ���','�߶���');

--19.fund plan details
CREATE TABLE fund_plan_details(fpd_id Integer primary key autoincrement,fpl_id int,fid int,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_plan_details(fpl_id,fid) values(2,1); --ȫ���Ǽƻ�-��˳���ǻ���300��ǿ,fpid_id=1
INSERT INTO fund_plan_details(fpl_id,fid) values(2,2); --ȫ���Ǽƻ�-�����¶���A,fpid_id=2
INSERT INTO fund_plan_details(fpl_id,fid) values(3,2); --��Ͷ�ƻ�-�����¶���A,fpid_id=3

--20.combining plan
CREATE TABLE plan_combin(pc_id Integer primary key autoincrement,name varchar(20),remark varchar(50));
INSERT INTO plan_combin(name,remark) values('�������','ѡ�ĸ�����?���?');
INSERT INTO plan_combin(name,remark) values('�߳ɳ��ɻ����','�߸߶���');

--21.fund plans match combining plans  N:N, status:0-useless,1-using
CREATE TABLE fund_plan_combin(fpc_id Integer primary key autoincrement,pc_id int,fpd_id int,status int,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO fund_plan_combin(pc_id,fpd_id,status) values(2,1,1); --�߳ɳ��ɻ����-ȫ���Ǽƻ�
INSERT INTO fund_plan_combin(pc_id,fpd_id,status) values(2,3,1); --�߳ɳ��ɻ����-��Ͷ�ƻ�

------------------------------------mine--biz:target and best choice------------------------------------------------
--22.user details
CREATE TABLE userdetail(uid Integer primary key autoincrement,username varchar(30),nickname varchar(30),phonenumber varchar(30),password varchar(100),is_fingerprint boolean,
is_posture boolean,is_fund_account boolean,target_bouns_amt float,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO userdetail(username,nickname,phonenumber,password,is_fingerprint,is_posture,is_fund_account,target_bouns_amt) values('Lady Gaga','GAGA','18808988989','YadnSEWOdwO09uwFepOe====',true,false,false,385.95);

--23.fund account (risk_level:1-�Ƚ�,2-����...;tax_id:1-��Ϊ�й�˰�վ���,2-��Ϊ���й�˰�վ���,3-�����й�˰�վ���Ҳ����������(����)˰�վ���);occupation:1-������Ա
CREATE TABLE user_fund_account(ufa_id Integer primary key autoincrement,real_name varchar(30),risk_level int,tax_id int,trade_password varchar(50),idcard_num varchar(20),
idcard_expdate datetime,address varchar(100),occupation int,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO user_fund_account(real_name,risk_level,tax_id,trade_password,idcard_num,idcard_expdate,address,occupation) values('�Ŵ仨',1,1,'YadnSEWOdwO09uwFepOe====','110221199202235460','2033-12-02','�Ϻ����Ͼ�����·xxx��',1);

--24.service card (source:1-����,2-����,3-�����ȡ,4-����Ԯ��;status:1-δʹ��,0-��ʹ��)
CREATE TABLE user_card(uc_id Integer primary key autoincrement,name varchar(20),source int,status int,exp_date_start datetime,exp_date_end datetime,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO user_card(name,source,status,exp_date_start,exp_date_end) values('��Ŀ�����',1,1,'2020-01-22','2022-01-22');
INSERT INTO user_card(name,source,status,exp_date_start,exp_date_end) values('�Ӽ��ȷ���',1,1,'2020-01-22','2022-01-22');

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
--29.target run_status:0-����,1-������,2-ӯ����,3-������,4-�Ѵ��,5����� ,0<N<4->������
CREATE TABLE targets(tid Integer primary key autoincrement,name varchar(10),target_ratio float,run_status int,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO targets(name,target_ratio,run_status) values('2006',0.08,1);

--30.target and its funds
CREATE TABLE target_funds(tf_id Integer primary key autoincrement,fid int,amt float,last_returns float,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO target_funds(fid,amt,last_returns) values(1,2478.63,4.51);

--31.history of daily target news,status:0-show,1-not show
CREATE TABLE target_history(th_id Integer primary key autoincrement,tid int,title varchar(50), content varchar(1000),status int,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO target_history(tid,title,content,status) values(1,'2��23��[��Ŀ��]Ͷ�ʲ���','�������ű������Ż��˰�.',1);

--32.fund trade summery status:0-��ǰ���,1-�������
CREATE TABLE target_trade_summery(tts_id Integer primary key autoincrement,uid int,tid int,bc_id int,invest_amt float,bonus_amt float,status int,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO target_trade_summery(uid,tid,bc_id,invest_amt,bonus_amt,status) values(1,1,1,3000,242.08,1);--Lady Gaga-2006�ڴ�Ŀ��-ʹ�����п�0005�ؿ��˺�-Ͷ��3000-����242.08-�������

--33.fund trade body status:0-�����,1-�ѵ���
CREATE TABLE target_trade_process(ttp_id Integer primary key autoincrement,uid int,fid int,tt_id int,tid int,status int,confirm_fund_amt float,confirm_date datetime,pay_date datetime,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO target_trade_process(uid,fid,tt_id,tid,status,confirm_fund_amt,confirm_date,pay_date) values(1,2,1,1,2,340.85,'2020-02-21','2020-02-25');--Lady Gaga-��˳���ǻ���300��ǿ-�����˱�A-1-[��Ŀ��]1902-ת��-ת��237.36-ת��

--34.fund trade history details  status:0-�깺,1-�ֺ�,2-���; trade_status:1-��ȷ��
CREATE TABLE target_trade_process_details1(ttpd1_id Integer primary key autoincrement,uid int,fid int,tid int,bc_id int,apply_amt float,confirm_worth float,confirm_portion float,charge float, trade_status int,
order_date datetime,pay_date datetime,confirm_date datetime,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO target_trade_process_details1(uid,fid,tid,bc_id,apply_amt,confirm_worth,confirm_portion,charge,trade_status,order_date,pay_date,confirm_date) values(1,1,1,1,3000,1.0,3000,0.00,1,'2019-10-21 13:58:10','2019-10-21 13:58:10','2019-11-01 13:58:10');

--35.fund trade history details  status:0-�깺,1-�ֺ�,2-���; trade_status:1-��ȷ��
CREATE TABLE target_trade_process_details2(tthd2_id Integer primary key autoincrement,uid int,tid int,fid_in int,fid_out int,worth_out float,worth_in float,fund_portion_in float,fund_portion_out float,charge_in float,charge_out float,
trade_status_in int,trade_status_out int,inserttime timestamp not null default (datetime('now','localtime')));
INSERT INTO target_trade_process_details2(uid,tid,fid_in,fid_out,worth_out,worth_in,fund_portion_in,fund_portion_out,charge_in,charge_out,trade_status_in,trade_status_out) values(1,1,1,2,1,1.0,1.26,188.3,237.26,0.00,1,1);
