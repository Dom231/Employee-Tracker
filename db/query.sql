SELECT role.id AS id, role.title_name AS title, department.department_name AS department, role.salary AS salary
FROM role
JOIN department ON role.department_id = department.id;

SELECT employee.id AS id, employee.first_name, employee.last_name, role.title_name AS title, department.department_name AS department,role.salary AS salary, concat(manager.first_name," ", manager.last_name) AS manager
FROM employee
JOIN role ON employee.role_id = role.id
JOIN department ON role.department_id = department.id
JOIN employee manager ON manager.id = employee.manager_id;
-- self join
