/* === create database === */
DROP DATABASE IF IT EXISTS employee_db;
CREATE DATABASE employee_db;

USE DATABASE employee_db;

/* === create department table === */
CREATE TABLE department (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30) UNIQUE NOT NULL,
    );

/* === create role table === */
CREATE TABLE role (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL, 
    );

/* === create employee table === */ 
CREATE TABLE employee (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) UNIQUE NOT NULL,
    last_name VARCHAR(30),
    role_id INTEGER NOT NULL,
    manager_id INTEGER,
    );

INSERT INTO department (dept_name)
VALUES ("HR"), ("Sales"), ("Legal"), ("Finance"), ("Engineering")

INSERT INTO role (title, salary, department_id)
VALUES 

INSERT INTO employee (first_name, last_name,role_id, manager_id)
VALUES
