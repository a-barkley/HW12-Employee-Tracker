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


// select e.last_name,e.first_name,r.title from employee e inner join role r on e.role_id = r.id order by e.last_name;


function viewDepartments() {
  return new Promise(resolve => {
    db.query("select id, name as 'Department' from department", (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.table(result)
      }
      resolve('resolve')
    })
  })
}


function viewRoles() {
  return new Promise(resolve => { 
    db.query("select id, title as 'Position', salary as 'Salary' from role", (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.table(result)
      }
      resolve('resolve')
    })
  })  
}


function viewEmployees() {
  return new Promise(resolve => {
    db.query("select last_name as 'Last Name',first_name as 'First Name' from employee", (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.table(result)
      }
    })
    resolve('resolve')
  })
}


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
    .then(async (answer) => {
      switch (answer.mainQuestions) {
        case 'View Departments':
          await viewDepartments();
          break;
        
        case 'View Roles':
          await viewRoles();
          break;

        case 'View Employees':
          await viewEmployees();
          break;

        case 'Add a department':
          await addDepartment();
          break;

        case 'Add a role':
          await addRole();
          break;

        case 'Add an employee':
          await addEmployee();
          break;

        case 'Update employee role':
          await updateRole();
          break;
      }
      initial();
    })
    .catch()
}





initial();