CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger {
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30),
    devoured BOOLEAN not null default 0,
    PRIMARY KEY(id)
};