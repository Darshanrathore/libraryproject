# Library_project
it is library management project, where admin and user two diffrent role, admin  can Add, remove, update and delete the book and user can buy th book.

technology used:- Angular, NodeJs, HTML,CSS,Bootstrap,Mysql,ExpressJs.

//-------------run the project-----------//

download the zip file and extract it in a folder and open in code editor.

1): for backend you need to install node module so, simply run "npm install" command it will install required node modules than using "npm start" you can run the backend.

2) for frontend you need to open it in terminal of our editor than run
   "npm uninstall node-sass" command than run,
   "npm install --force " command , it will install the required node modules.

   than simply run "ng serve" to lift the app.

//-------------Database-----------//

connect the4 database as mention in .env file you can remane the database name , password etc. accortding to your setting. once it is done you have to create table:-

create books table :-
 CREATE TABLE books(
      id int NOT NULL AUTO_INCREMENT,
      bookname varchar(255) NOT NULL,
      discription varchar (500),
      author varchar (250),
      price int NOT NULL,
      images varchar (600),
      category varchar (50),
      PRIMARY KEY (id)
     );

     create user table:-
     CREATE TABLE user(
     name varchar(255),
     email varchar(255),
     password varchar(255),
     role enum('user','admin')
     );
