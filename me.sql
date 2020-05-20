

ALTER USER ‘root’@’localhost’ IDENTIFIED WITH mysql_native_password BY ‘sky120’

mysql -u root -p

create database jsman  DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

use jsman;

CREATE TABLE user
( 
    id INT(11) NOT NULL AUTO_INCREMENT,
    email VARCHAR(45) NOT NULL,
    name VARCHAR(45) NOT NULL,
    pw VARCHAR(45) NOT NULL,
    CONSTRAINT user_pk PRIMARY KEY (id)
);

show tables;

insert into user(email,name,pw) values ('vandlaw@naver.com', 'crong', 'asdf');

select * from user;

ALTER USER ‘root’@’localhost’ IDENTIFIED WITH mysql_native_password BY ‘sky120’