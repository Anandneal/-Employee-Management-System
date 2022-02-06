const connection = require("./db/connection");
require("console.table");
const inquirer = require("inquirer");

const menu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Which action would you like to take?",
        name: "action",
        choices: [
          "View all employees",
          "View all roles",
          "View all departments",
          "Add a department",
          "add a role",
          "add an employee",
          "update an employee role",
          "Exit",
        ],
      },
    ])
    .then((data) => {
      console.log(data.action);
      if (data.action == "View all employees") {
        connection.query(
          "SELECT * FROM employee",
          function (err, employeeResult) {
            console.table(employeeResult);
            menu();
          }
        );
      } else if (data.action == "View all roles") {
        connection.query("SELECT * FROM empRole", function (err, roleresults) {
          console.table(roleresults);
          menu();
        });
      } else if (data.action == "View all departments") {
        connection.query(
          "SELECT * FROM department",
          function (err, departmentResult) {
            console.log("hey");
            console.table(departmentResult);
            menu();
          }
        );
      } else if (data.action == "Add a department") {
        const department = [];
        inquirer
          .prompt({
            name: "department",
            type: "input",
            message: "Enter department name",
          })
          .then((res) => {
            department.push(res.department);
            connection
              .promise()
              .query(
                `INSERT INTO department (name) VALUES ("${department[0]}")`
              );
            console.log("we did it");
          })
          .then(() => menu());
      } else if (data.action == "add a role") {
        const role = [];
        inquirer
          .prompt([
            {
              name: "title",
              type: "input",
              message: "Enter role",
            },
            {
              name: "salary",
              type: "input",
              message: "enter salary",
            },
            {
              name: "departmentId",
              type: "input",
              message: "Enter department ID",
            },
          ])
          .then((res) => {
            role.push(res);
            connection
              .promise()
              .query(
                `INSERT INTO empRole (title, salary, department_id) VALUES ("${role[0].title}", "${role[0].salary}", "${role[0].departmentId}")`
              );
            console.log("we did it");
            menu();
          });
      } else if (data.action == "add an employee") {
        const employee = [];
        inquirer
          .prompt([
            {
              name: "firstName",
              type: "input",
              message: "Enter their first name",
            },
            {
              name: "lastName",
              type: "input",
              message: "enter their last name",
            },
            {
              name: "role_id",
              type: "input",
              message: "Enter their employee id",
            },
          ])
          .then((res) => {
            employee.push(res);
            connection
              .promise()
              .query(
                `INSERT INTO employee (first_name, last_name, role_id) VALUES ("${employee[0].firstName}", "${employee[0].lastName}", "${employee[0].role_id}")`
              );
            console.log("we did it");
            menu();
          });
      } else if (data.action == "update an employee role") {
        const employee = [];

        connection.query(
          `SELECT CONCAT(first_name, " ", last_name) AS fullName FROM employee;`,
          function (err, employeeResult) {
            employeeResult.forEach((element) => {
              employee.push(element.fullName);
            });
            inquirer
              .prompt([
                {
                  name: "employee",
                  type: "list",
                  message: "which employee?",
                  choices: employee,
                },
                {
                  name: "role",
                  type: "list",
                  message: "pick a role ID?",
                  choices: [1, 2, 3, 4, 5, 6, 7],
                },
              ])
              .then(({ employee, role }) => {
                connection.query(
                  `UPDATE employee SET role_id = "${role}" WHERE first_name  = "${
                    employee.split(" ")[0]
                  }"`
                );

                console.table("We did it!");
                menu();
              });
          }

          //   menu()
        );
      } else {
        process.exit(0);
      }
    });
};

menu();
