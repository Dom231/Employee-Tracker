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
 }

 function initQuestion(){
  
    inquirer
        .prompt([
         {
        type:'list', 
        name:'department',
        message: "What would you like to do ? ",
        choices:['View all Departments', 'View all roles', 'View all employees']
        }
    ])
    .then((answer)=>{
        if(answer.department === 'View all Departments' )
        { checkDepartment();
          // db.query(`SELECT * FROM department`, (err, result) => {
          //   if (err) {
          //     console.log(err);
          //   }
          //   console.table(result);
          // });
        }
          else if(answer.department === 'View all roles'){db.query(`SELECT * FROM role`, (err, result) => {
            if (err) {
              console.log(err);
            }
            console.table(result);
          });}
          else if (answer.department === 'View all employees'){db.query(`SELECT * FROM employee`, (err, result) => {
            if (err) {
              console.log(err);
            }
            console.table(result);
          });}
          else(console.log("you have an error"))

    })
  
 }

 
 initQuestion();




