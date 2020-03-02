--system info like banners/company introduction/about target/introduction of selecting funds etc.
CREATE TABLE system_info(id primary key autoincrement ,title varchar(50), content varchar(1000), status int, inserttime timestamp not null default (datetime('now','localtime')))
INSERT INTO system_info(title, content, status) values('��˾����','�Ҿ����Ҳ�һ�����̻�',1)

--news type  like 
CREATE TABLE news_category(nc_id int primary key autoincrement,category_name varchar(50),status int,inserttime datetime)
INSERT INTO news_category(category_name, status) values('Ͷ�������',1)

--news details invester face to face/drumstick news/
CREATE TABLE news_info(nid int primary key autoincrement,nc_id int, title varchar(50), img_url varchar(200), content varchar(1000), status int, inserttime timestamp not null default (datetime('now','localtime')))
INSERT INTO news_info(title, img_url, content, status) values('[��Ŀ��]2������������͵�ǰ�г�����','/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png','���Ƿ�����...������',1)

--fund category  like ETF/LOF/QDFII etc.
CREATE TABLE fund_category(fc_id int primary key autoincrement, name varchar(50), status int)
INSERT INTO fund_category(name,status) values('��Ʊ�ͻ���',1) --fc_id=1
INSERT INTO fund_category(name,status) values('ָ���ͻ���',1)
INSERT INTO fund_category(name,status) values('ƫ���ͻ���',1)
INSERT INTO fund_category(name,status) values('��ծƽ���ͻ���',1)
INSERT INTO fund_category(name,status) values('ƫծ�ͻ���',1)
INSERT INTO fund_category(name,status) values('ծȯ�ͻ���',1)
INSERT INTO fund_category(name,status) values('�����ͻ���',1)
INSERT INTO fund_category(name,status) values('�����ͻ���',1)

--fund manager
CREATE TABLE fund_manager(fm_id int primary key autoincrement, name varchar(30), status int, remark varchar(1000), inserttime timestamp not null default (datetime('now','localtime')))
INSERT INTO fund_manager(name,status,remark) values('������',1,'����ѧ��ʿ,CFA.��������...��������...') --fm_id=1
INSERT INTO fund_manager(name,status,remark) values('��������',1,'����ѧ**,CFA.����������.') --fm_id=2

--fund industry like manufacturing/finance/real estate/construction etc
CREATE TABLE fund_industry(fi_id int primary autoincrement, name varchar(50))
INSERT INTO fund_industry(name) values('����ҵ')
INSERT INTO fund_industry(name) values('����ҵ')
INSERT INTO fund_industry(name) values('���ز�ҵ')
INSERT INTO fund_industry(name) values('ũ���֡�������ҵ')
INSERT INTO fund_industry(name) values('����ҵ')
INSERT INTO fund_industry(name) values('����')

--fund position like CMB/GREE etc
CREATE TABLE fund_stock(fs_id int primary key autoincrement, name varchar(50), status int, code varchar(20),remark varchar(100),inserttime timestamp not null default (datetime('now','localtime')))
INSERT INTO fund_stock(name,status,code,remark) values('�й�ƽ��','601318.SH',1,'���ش���') --fs_id=1
INSERT INTO fund_stock(name,status,code,remark) values('��������','600036.SH',1,'���ش���') --fs_id=2

CREATE TABLE fund_customized_category(fcc_id int primary key autoincrement, name varchar(50))
INSERT INTO fund_customized_category(name) values('������')
INSERT INTO fund_customized_category(name) values('�Ƚ���')
INSERT INTO fund_customized_category(name) values('��ֵ��')
INSERT INTO fund_customized_category(name) values('������')
INSERT INTO fund_customized_category(name) values('�ɳ���')

--fund details
CREATE TABLE fund_info(fid int primary key autoincrement, fc_id int, fcc_id int,fund_name varchar(50), fund_code varchar(20), fund_assets varchar(30), start_date datetime,remark varchar(500), inserttime timestamp not null default (datetime('now','localtime')))
INSERT INTO fund_info(fc_id,fcc_id,fund_name,fund_code,fund_assets,start_date,remark) values(1,1,'��˳���ǻ���300��ǿ','000311','100��','2016-10-01','Ϲ��') -- fid=1
INSERT INTO fund_info(fc_id,fcc_id,fund_name,fund_code,fund_assets,start_date,remark) values(1,2,'�����¶���A','001508','100��','2016-10-01','Ϲ��') -- fid=2

--fund manager matchs fund
CREATE TABLE fund_managers(fms_id int primary autoincrement,fid int, fm_id int,inserttime timestamp not null default (datetime('now','localtime')))
INSERT INTO fund_managers(1,1)
INSERT INTO fund_managers(1,2)

--fund position 
CREATE TABLE fund_position(fp_id int primary key autoincrement,fid int, fs_id int,hold_num int)
INSERT INTO fund_position(fid,fs_id,hold_num) values(1,1,752)--��˳���ǻ���300��ǿ-�й�ƽ��-752/100
INSERT INTO fund_position(fid,fs_id,hold_num) values(1,2,513)--��˳���ǻ���300��ǿ-��������-513/100


