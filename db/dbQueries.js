// const connection = require('./connection')



// class DB{
//     constructor(connection){
//         this.connection = connection
//     }

//     findAllEmployees(){
//         return this.connection.query(
//             'SELECT employee.id, employee.first_name, role.title, department.name AS department, role.salary, CONCAT (manager.first_name, ' ', manger.last_name)'
//         )
//     }
// }