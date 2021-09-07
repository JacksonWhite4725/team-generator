const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

class Employee {
    employeeInfo() {
        inquirer 
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is your team member name?\n',
                },
                {
                    type: 'list',
                    name: 'role',
                    message: 'What does your team member do?\n',
                    choices: ['Manager', 'Engineer', 'Intern'],
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is the team member\'s identification number?\n',
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the team member\'s email address?\n'
                }
            ])
        }
}

module.exports = Employee;

