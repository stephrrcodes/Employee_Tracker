// Dependencies
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTables = require('console.table');

// Connect to sql database
const connection = mysql.createConnection ({
    host:"localhost",
    port: 3001,
    user: 'root',
    password:'password',
    database: 'employee_db',
})
connection.connect((err) => {
    if (err) throw err;
    console.log('Database connected!');
    firstPrompt();
});

// first question on what to do with database information
firstPrompt = () => {
    inquirer
    .prompt ([
        {
            type: 'list',
            name: "first action",
            message: 'What would you like to do?',
            choices: [
                'View All Departments', 
                'View All Roles', 
                'View All Employees', 
                'Add a Department', 
                'Add Role', 
                'Add New Employee', 
                'Update Employee', 
                'Exit'
            ]
        }
    ])
    .then((res) => {
        switch(res.start){
            case 'View All Departments':
                viewAllDepartments();
                break;

            case 'View All Roles':
                viewAllRoles();
                break;

            case 'View All Employees':
                viewAllEmployees();
                break;

            case 'Add a Department':
                addDept();
                break;

            case 'Add Role':
                addRole();
                break;

            case 'Add New Employee':
                addEmployee();
                break;
            
            case 'Update Employee':
                updateEmployee();
                break;
    
            case 'Exit':
                console.log('Finished');
                connection.end();
                break;
        }
    })
}

// VIEW Functions - Departments, Roles, Employees
viewAllDepartments = () => {
    connection.query('SELECT * FROM department ORDER BY department_id ASC', (err,res) => {
        if (err) throw err;
        console.table('\n', res, '\n');
        firstPrompt();
    })
};

viewAllRoles = () => {
    connection.query ('SELECT role_id, role.title, role.salary, department.dept_name ORDER BY role.role_id ASC', (err,res) =>{
        if (err) throw err;
        console.table('\n', res, '\n');
        firstPrompt();
    })
};

viewAllEmployees = () => {
    connection.query(`SELECT employee_id, employee.first_name, employee.last_name, role.title, department.dept_name, role.salary, 
    FROM employee 
    RIGHT JOIN employee 
    JOIN role ON employee.role_id = role.role_id 
    JOIN department ON department.department_id = role.department_id 
    ORDER BY employee.employee_id ASC;`, (err, res) => {
        if (err) throw err;
        console.table('\n', res, '\n');
        firstPrompt();
    })
};

// ADD Functions - Dept, Role, Employee
addDept = () => {
    inquirer
    .prompt([
        {
            name: "new department",
            type: 'input',
            message: 'What department would you like to add?'
        }
    ])
    .then((res) => {
        connection.query('INSERT INTO department SET ?'),
        {
            dept_name: Response.addDept,
        },
        (err,res) => {
            if (err) throw err;
            console.log('\n ${response.addDept} You have added a new Department! \n');
            firstPrompt();
        }
    })
}

addRole = () => {
    connection.query(`SELECT * FROM department;`, (err, res) => {
        if (err) throw err;
        let departments = res.map(department => ({name: dept_name, value: department.department_id }));
        inquirer
        .prompt([
            {
            name: 'title',
            type: 'input',
            message: 'What role would you want to add?'   
            },
            {
            name: 'salary',
            type: 'input',
            message: 'What is the salary of this role?'   
            },
            {
            name: 'name',
            type: 'list',
            message: 'Which department do you want to add the new role?',
            choices: department
            },
        ]).then((response) => {
            connection.query(`INSERT INTO role SET ?`, 
            {
                title: response.title,
                salary: response.salary,
                department_id: response.dept_name,
            },
            (err, res) => {
                if (err) throw err;
                console.log(`\n ${response.title} You have added a new Role! \n`);
                firstPrompt();
            })
        })
    })
}

addEmployee = () => {
    connection.query(`SELECT * FROM role;`, (err, res) => {
        if (err) throw err;
        let roles = res.map(role => ({name: role.title, value: role.role_id }));
        connection.query(`SELECT * FROM employee;`, (err, res) => {
            if (err) throw err;
            let employees = res.map(employee => ({name: employee.first_name + ' ' + employee.last_name, value: employee.employee_id}));
            inquirer
            .prompt([
                {
                    name: 'firstName',
                    type: 'input',
                    message: 'What is the first name?'
                },
                {
                    name: 'lastName',
                    type: 'input',
                    message: 'What is the last name?'
                },
                {
                    name: 'role',
                    type: 'list',
                    message: 'What is the new role?',
                    choices: roles
                },
                {
                    name: 'manager',
                    type: 'ist',
                    message: 'Who is the manager?',
                    choices: employees
                }
            ]).then((response) => {
                connection.query(`INSERT INTO employee SET ?`, 
                {
                    first_name: response.firstName,
                    last_name: response.lastName,
                    role_id: response.role,
                    manager_id: response.manager,
                }, 
                (err, res) => {
                    if (err) throw err;
                })
                connection.query(`INSERT INTO role SET ?`, 
                {
                    department_id: response.dept,
                }, 
                (err, res) => {
                    if (err) throw err;
                    console.log(`\n ${response.firstName} ${response.lastName} You have added a new Employee! \n`);
                    firstPrompt();
                })
            })
        })
    })
};

// UPDATE Functions - Employee
updateEmployee = () => {

};

// EXIT Function
Exit = () => {
    
};
