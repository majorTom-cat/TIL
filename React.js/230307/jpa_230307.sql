use jpa;

create table board_tbl (
	BOARD_NUM int not null auto_increment,
    BOARD_WRITER varchar(20) default null,
    BOARD_TITLE varchar(30) default null,
    BOARD_CONTENT varchar(500) default null,
    BOARD_DATE datetime default current_timestamp,
    primary key (BOARD_NUM)
);

insert into board_tbl (BOARD_WRITER, BOARD_TITLE, BOARD_CONTENT)
values ('aaa', 'test1', 'test1...');

select * from board_tbl;
-- ---------------------------------------------
select host, user from mysql.user;

create user 'root'@'%' identified by '123456';

grant all privileges on *.* to 'root'@'%' with grant option;

flush privileges;


select host, user, plugin, authentication_string from mysql.user;

alter user 'root'@'localhost' identified with mysql_native_password by '123456';
alter user 'root'@'%' identified with mysql_native_password by '123456';
