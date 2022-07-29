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
    db.query("select r.title,r.id,d.name,r.salary from role r inner join department d on r.department_id = d.id order by r.id", (err, result) => {
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
      resolve('resolve')
    })
  })
}

function addDepartment() {
  return new Promise(resolve => {
    inquirer  
      .prompt(
        {
          name: 'newDepartment',
          message: 'What is the name of the department you would like to add?'
        }
      )
      .then((answer) => {
        db.query(`insert into department (name) values (?)`, answer.newDepartment, (err, result) => {
          if (err) {
            console.log(err)
          } else {
            viewDepartments();
          }
        })
        resolve('resolve')
      })
  })
}

// function broken, skipping all but first question which makes it incompatible with the db.query statement
function addRole() {
  return new Promise(resolve => {
    inquirer  
      .prompt(
        {
          name: 'newRole',
          message: 'What is the name of the role you would like to add?'
        },
        {
          name: 'newSalary',
          message: 'What is the salary of the new role?'
        },
        {
          name: 'roleDept',
          message: 'What department does the role belong to?'
        }
      )
      .then((answer) => {
        console.log('test')
        db.query(`insert into role (title,salary,department_id) values (?)`, [[answer.newDepartment,answer.newSalary,answer.roleDept]],(err, result) => {
          if (err) {
            console.log(err)
          } else {
            viewRoles();
          }
        })
        resolve('resolve')
      })
  })
}


function initial() {
  inquirer
    .prompt(
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
}


initial();