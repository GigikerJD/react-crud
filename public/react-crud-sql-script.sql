create database usersdb;
use usersdb;

CREATE TABLE Users(
   email VARCHAR(200),
   username VARCHAR(100),
   firstname VARCHAR(100),
   lastname VARCHAR(100),
   age INT,
   DOB DATE,
   password VARCHAR(100),
   PRIMARY KEY(email, username)
);
