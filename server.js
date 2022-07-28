const inquirer = require ('inquirer')
const mysql = require ('mysql2')
const cTable = require('console.table')


const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'project_db'
    },
    console.log(`Connected to the project_db database.`)
);





select e.last_name,e.first_name,r.title from employee e inner join role r on e.role_id = r.id order by e.last_name;


function initial() {
  inquirer
    .prompt
    (
      {
        name: 'mainQuestions',
        type: 'list',
        message: 'What would you like to do?',
        choices: 
          [
            'View Departments',
            'View Roles',
            'View Employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update employee role'
          ]
      }
    )
    .then((answer) => {
      switch (answer.mainQuestions) {
        case 'View Departments':
          viewDepartments();
          break;
        
        case 'View Roles':
          viewRoles();
          break;

        case 'View Employees':
          viewEmployees();
          break;

        case 'Add a department':
          addDepartment();
          break;

        case 'Add a role':
          addRole();
          break;

        case 'Add an employee':
          addEmployee();
          break;

        case 'Update employee role':
          updateRole();
          break;
      }
    })
}

function viewDepartments() {
  db.query("select id, name as 'Department' from department");
  initial();
}

function viewRoles() {
  db.query("select id, title as 'Position', salary as 'Salary' from role");
  initial();
}

function viewEmployees() {
  db.query("select last_name as 'Last Name',first_name as 'First Name' from employee")
  initial();
}



