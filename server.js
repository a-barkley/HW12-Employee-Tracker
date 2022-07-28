const inquirer = require ('inquirer')
const mysql = require ('mysql2')
const cTable = require('console.table')

const PORT = process.env.PORT || 3001;
const app = express();

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'project_db'
    },
    console.log(`Connected to the project_db database.`)
);


select name as 'Department Name' from department;
select title as 'Position' from role;
select last_name as 'Last Name',first_name as 'First Name' from employee;

select e.last_name,e.first_name,r.title from employee e inner join role r on e.role_id = r.id order by e.last_name;

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});