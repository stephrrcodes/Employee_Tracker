// Dependencies
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require ('console.table');

// Connect to sql database
const connection = mysql.createConnection ({
    host:"localhost",
    port: 3001,
    user: 'root',
    password:'password',
    database: 'employee_db',
})
connection.connect(err => {
    if (err) throw err;
    console.log('Database connected!');
    firstPrompt();
});

// first question on what to do with database information
function firstPrompt () {
    inquirer
    .prompt ([
        {
            type: 'list',
            name: "first action",
            message: 'What would you like to do?',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add Role', 'Add New Employee', 'Update an Employee Role', 'Exit']
        }
    ])
    .then (function(res){
        switch(res.start){
            case 'View All Departments':
                viewAllDepts();
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
            
            case 'Update an Employee Role':
                updateEmployee();
                break;
    
            case 'Exit':
                console.log('Finished');
                connection.end();
                break;
        }
    })
}

function viewAllDepts(){
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'view all departments',
            message: 'Which department would you like to view?'
        }
    ])
    .then(function(res){

    })
}

function viewAllRoles(){
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'view all roles',
        }
    ])
    .then(function(res){
        
    })
}

function viewAllEmployees(){
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'view all employees',
        }
    ])
    .then(function(res){
        
    })
}

function addDept(){
    inquirer
    .prompt([
        {

        }
    ])
    .then(function(res){
        
    })
}

function addRole(){
    inquirer
    .prompt([
        {}
    ])
    .then(function(res){
        
    })
}

function addEmployee(){
    inquirer
    .prompt([
        {}
    ])
    .then(function(res){
        
    })
}

function updateEmployee(){
    inquirer
    .prompt([
        {}
    ])
    .then(function(res){
        
    })
}

function Exit(){
    inquirer
    .prompt([
        {}
    ])
    .then(function(res){
        
    })
}
