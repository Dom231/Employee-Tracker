DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30)
); 

CREATE TABLE  role (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title_name VARCHAR(30) NOT NULL,
  salary DECIMAL,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
  ON DELETE SET NULL
);

CREATE TABLE employee(
 id INT AUTO_INCREMENT UNIQUE ,
 first_name NVARCHAR(30) NULL,
 last_name NVARCHAR(30) NULL,
 role_id INT,
 manager_id INT NULL,
 FOREIGN KEY (role_id)
 REFERENCES role(id)
 ON DELETE SET NULL
--  FOREIGN KEY (manager_id)
--  REFERENCES employee(id)
--  ON DELETE SET NULL
);