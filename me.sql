

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

DELETE FROM user WHERE id=3;


mysql -u root -p

use jsman;

CREATE TABLE movie
( 
    id INT(11) NOT NULL AUTO_INCREMENT,
    title VARCHAR(45) NOT NULL,
    type VARCHAR(45) NOT NULL,
    grade float NOT NULL,
    actor VARCHAR(45) NOT NULL,
    CONSTRAINT user_pk PRIMARY KEY (id)
);

insert into movie(title,type,grade,actor) values ('master', 'action', 9.10, 'leebyunghun');
insert into movie(title,type,grade,actor) values ('moonlight', 'drama', 9.52, 'Barry Jenkins');
insert into movie(title,type,grade,actor) values ('wall-E', 'animation', 8.33, 'robot');
insert into movie(title,type,grade,actor) values ('Zootopia', 'adventure', 9.93, 'Judy hops');
insert into movie(title,type,grade,actor) values ('master', 'action', 9.92, 'July Andrews');

select * from movie;
