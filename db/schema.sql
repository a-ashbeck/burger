-- Create burgers_db database
CREATE DATABASE burgers_db;

-- Use the burger_db database
USE burgers_db;

-- Create a burgers table in the DB with these variable columns
CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(400) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);
