CREATE DATABASE employees;
USE employees;

CREATE TABLE people (
id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
email VARCHAR(40) NOT NULL,
first_name VARCHAR(40) NOT NULL,
last_name VARCHAR(40) NOT NULL
);

INSERT INTO `people`(`email`, `first_name`, `last_name`)
VALUES ('john@gmail.com', 'John', 'Smith'),
('peter@gmail.com', 'Peter', 'Snow');