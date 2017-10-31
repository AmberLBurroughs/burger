CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(200) NOT NULL,
	devoured BOOLEAN DEFAULT FALSE,
	date datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);