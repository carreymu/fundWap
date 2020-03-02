--system info like banners/company introduction/about target/introduction of selecting funds etc.
CREATE TABLE system_info(id primary key autoincrement ,title varchar(50), content varchar(1000), status int, inserttime timestamp not null default (datetime('now','localtime')))
INSERT INTO system_info(title, content, status) values('公司介绍','我就是我不一样的烟火',1)

--news type  like 
CREATE TABLE news_category(nc_id int primary key autoincrement,category_name varchar(50),status int,inserttime datetime)
INSERT INTO news_category(category_name, status) values('投资面对面',1)

--news details invester face to face/drumstick news/
CREATE TABLE news_info(nid int primary key autoincrement,nc_id int, title varchar(50), img_url varchar(200), content varchar(1000), status int, inserttime timestamp not null default (datetime('now','localtime')))
INSERT INTO news_info(title, img_url, content, status) values('[大目标]2周年运行情况和当前市场分析','/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png','我是分析君...哈哈哈',1)

--fund category  like ETF/LOF/QDFII etc.
CREATE TABLE fund_category(fc_id int primary key autoincrement, name varchar(50), status int)
INSERT INTO fund_category(name,status) values('股票型基金',1) --fc_id=1
INSERT INTO fund_category(name,status) values('指数型基金',1)
INSERT INTO fund_category(name,status) values('偏股型基金',1)
INSERT INTO fund_category(name,status) values('股债平衡型基金',1)
INSERT INTO fund_category(name,status) values('偏债型基金',1)
INSERT INTO fund_category(name,status) values('债券型基金',1)
INSERT INTO fund_category(name,status) values('保本型基金',1)
INSERT INTO fund_category(name,status) values('货币型基金',1)

--fund manager
CREATE TABLE fund_manager(fm_id int primary key autoincrement, name varchar(30), status int, remark varchar(1000), inserttime timestamp not null default (datetime('now','localtime')))
INSERT INTO fund_manager(name,status,remark) values('张三疯',1,'经济学博士,CFA.我是三丰...不是三疯...') --fm_id=1
INSERT INTO fund_manager(name,status,remark) values('阿瓦买提',1,'经济学**,CFA.我是买买提.') --fm_id=2

--fund industry like manufacturing/finance/real estate/construction etc
CREATE TABLE fund_industry(fi_id int primary autoincrement, name varchar(50))
INSERT INTO fund_industry(name) values('制造业')
INSERT INTO fund_industry(name) values('金融业')
INSERT INTO fund_industry(name) values('房地产业')
INSERT INTO fund_industry(name) values('农、林、牧、渔业')
INSERT INTO fund_industry(name) values('建筑业')
INSERT INTO fund_industry(name) values('其他')

--fund position like CMB/GREE etc
CREATE TABLE fund_stock(fs_id int primary key autoincrement, name varchar(50), status int, code varchar(20),remark varchar(100),inserttime timestamp not null default (datetime('now','localtime')))
INSERT INTO fund_stock(name,status,code,remark) values('中国平安','601318.SH',1,'神秘代码') --fs_id=1
INSERT INTO fund_stock(name,status,code,remark) values('招商银行','600036.SH',1,'神秘代码') --fs_id=2

CREATE TABLE fund_customized_category(fcc_id int primary key autoincrement, name varchar(50))
INSERT INTO fund_customized_category(name) values('量化派')
INSERT INTO fund_customized_category(name) values('稳健派')
INSERT INTO fund_customized_category(name) values('价值型')
INSERT INTO fund_customized_category(name) values('主题型')
INSERT INTO fund_customized_category(name) values('成长型')

--fund details
CREATE TABLE fund_info(fid int primary key autoincrement, fc_id int, fcc_id int,fund_name varchar(50), fund_code varchar(20), fund_assets varchar(30), start_date datetime,remark varchar(500), inserttime timestamp not null default (datetime('now','localtime')))
INSERT INTO fund_info(fc_id,fcc_id,fund_name,fund_code,fund_assets,start_date,remark) values(1,1,'景顺长城沪深300增强','000311','100亿','2016-10-01','瞎编') -- fid=1
INSERT INTO fund_info(fc_id,fcc_id,fund_name,fund_code,fund_assets,start_date,remark) values(1,2,'富国新动力A','001508','100亿','2016-10-01','瞎编') -- fid=2

--fund manager matchs fund
CREATE TABLE fund_managers(fms_id int primary autoincrement,fid int, fm_id int,inserttime timestamp not null default (datetime('now','localtime')))
INSERT INTO fund_managers(1,1)
INSERT INTO fund_managers(1,2)

--fund position 
CREATE TABLE fund_position(fp_id int primary key autoincrement,fid int, fs_id int,hold_num int)
INSERT INTO fund_position(fid,fs_id,hold_num) values(1,1,752)--景顺长城沪深300增强-中国平安-752/100
INSERT INTO fund_position(fid,fs_id,hold_num) values(1,2,513)--景顺长城沪深300增强-招商银行-513/100


