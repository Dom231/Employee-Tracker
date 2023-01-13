const inquirer = require("inquirer");
const mysql = require('mysql2');
const cTable = require('console.table')


const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '994622Dt!',
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
);
const sqlrole = `SELECT role.id AS id, role.title_name AS title, department.department_name AS department, role.salary AS salary
FROM role
JOIN department ON role.department_id = department.id`; 

const sqlemployee = `SELECT employee.id AS id, employee.first_name, employee.last_name, role.title_name AS title, department.department_name AS department,role.salary AS salary, concat(manager.first_name," ", manager.last_name) AS manager
FROM employee
JOIN role ON employee.role_id = role.id
JOIN department ON role.department_id = department.id
JOIN employee manager ON manager.id = employee.manager_id;`;





 function checkDepartment(){
  inquirer
  .prompt([])
  .then(db.query(`SELECT * FROM department`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    initQuestion()
  }));
 };


 function checkRole(){
  inquirer
  .prompt([])
  .then(
    
    db.query(sqlrole, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    initQuestion()
  }));
 };

 function checkEmployee(){
  inquirer
  .prompt([])
  .then(db.query(sqlemployee, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    initQuestion()
  }));
 };

 function addDepartment(){
  inquirer
  .prompt([
  {
    type: 'input',
    name:'title',
    message:'What is the name of the department ?'
  
  }
])
.then((answer)=>{
  const sql = `INSERT INTO department(department_name) VALUE ("${answer.title}")`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    initQuestion()
  })

})
 }


 function addRole(){
  inquirer
  .prompt([
  {
    type: 'input',
    name:'title',
    message:'What is the name of the role?'
  
  },
  {
    type: 'input', 
    name: 'salary',
    message:'what is the salary of the role?'
  },
  {
    type: 'input',
    name: 'dept',
    message:"Eneter department id (refrence department table)"
  }
])
.then((answer)=>{
  const sql = `INSERT INTO role(title_name,salary,department_id) VALUE ("${answer.title}",${answer.salary},${answer.dept})`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    initQuestion()
  })

})
 }

 function addEmployee(){
  inquirer
  .prompt([
  {
    type: 'input',
    name:'first',
    message:'What is the employees first name?'
  
  },
  {
    type: 'input', 
    name: 'last',
    message:'what is the employees last name?'
  }
  ,
  {
    type: 'input',
    name:'role',
    message:'Enter role id (Refrence role table) ?'
},
{
  type:'input',
  name: 'manager', 
  message:"Enter manager's employee id(enter 1 for none)"
}
])
.then((answer)=>{
  const sql = `INSERT INTO employee(first_name,last_name,role_id,manager_id) VALUE ("${answer.first}","${answer.last}",${answer.role},${answer.manager})`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
    initQuestion()
  })

})
 }

function updateEmployee(){
  inquirer
  .prompt([
    {
      type:"input", 
      name:"employee",
      message:"Eneter the employee id of the employee you want to update"
    }, 
    {
      type:"input", 
      name:"role",
      message:"Enter the role id for the updated role"
    }
  ])
  .then((answer)=>{
    const sql = `UPDATE employee SET role_id = ${answer.role} WHERE id=${answer.employee} `;
    db.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.table(result);
      initQuestion()
    })
  
  })
}
 





 function initQuestion(){
  
    inquirer
        .prompt([
         {
        type:'list', 
        name:'department',
        message: "What would you like to do ? ",
        choices:['View all Departments', 'View all roles', 'View all employees','Add a Department',
        'Add a Role', 'Add an Employee','Update Employee Role','quit']
        }
    ])
    .then((answer)=>{
        if(answer.department === 'View all Departments' ) 
        { checkDepartment();}
          else if(answer.department === 'View all roles')
          {checkRole()}
          else if (answer.department === 'View all employees')
          {checkEmployee()}
          else if (answer.department === 'Add a Department')
          {addDepartment()}
          else if (answer.department === 'Add a Role')
          {addRole()}
          else if (answer.department === 'Add an Employee')
          {addEmployee()}
          else if (answer.department==='Update Employee Role')
          {updateEmployee()}
          else{db.end()}

    })
  
 }

 
 initQuestion();




