const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const team = [];

function buildMember() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your team member name?\n',
        },
        {
            type: 'list',
            name: 'role',
            message: 'What the team member\'s name?\n',
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
            message: 'What is the team member\'s email address?\n',
        }
    ])
    .then((responses) => {
        teamMember = [{name: responses.name}, {role: responses.role}, {id: responses.id}, {email: responses.email}];
        if (responses.role === 'Manager') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'office',
                    message: `What is ${responses.name}'s office number?\n`,
                },
            ])
            .then((responses) => {
                teamMember.push({office: responses.office});
                return teamMember;
            });
        } else if (responses.role === 'Engineer') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'github',
                    message: `What is ${responses.name}'s GitHub username?\n`,
                },
            ])
            .then((responses) => {
                teamMember.push({github: responses.github});
                return teamMember;
            });
        } else if (responses.role === 'Intern') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'school',
                    message: `What is ${responses.name}'s school name?\n`,
                },
            ])
            .then((responses) => {
                teamMember.push({school: responses.school});
                return teamMember;
            });
        }
    });
};

let teamMember = buildMember();
team.push(teamMember);
console.log(team);