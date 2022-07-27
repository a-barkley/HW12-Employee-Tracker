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




app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});