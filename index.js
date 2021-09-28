const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const path = require('path');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let team = [];

function startTeam() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What\'s the manager\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What\'s the manager\'s ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What\'s the manager\'s email address?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What\'s the manager\'s office number?',
        },
    ])
    .then((data) => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        team.push(manager);
        addMember();
    });
};

function addMember() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What role would you like to add now?',
            choices: ['Engineer', 'Intern', 'End Task'],
        },
    ])
    .then((data) => {
        if (data.role === 'Engineer') {
            addEngineer();
        } else if (data.role === 'Intern') {
            addIntern();
        } else {
            endTask();
        };
    });
};

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What\'s the engineer\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What\'s the engineer\'s ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What\'s the engineer\'s email address?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What\'s the engineer\'s GitHub username?',
        },
    ])
    .then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        team.push(engineer);
        addMember();
    });
};

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What\'s the intern\'s name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What\'s the intern\'s ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What\'s the intern\'s email address?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What\'s the intern\'s school?',
        },
    ])
    .then((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        team.push(intern);
        addMember();
    });
};

function endTask() {
    let teamCards = '';

    team.forEach((member) => {
        switch (member.getRole()) {
            case 'Manager':
                teamCards += `
                <div class="card_item">
                    <div class="card_inner">
                        <div class="card_top">
                        <h1>${member.name}</h1>
                        </div>
                        <div class="card_bottom">
                        <div class="card_category">
                            ${member.getRole()}
                        </div>
                        <div class="card_info">
                            <p class="title">ID: ${member.id}</p>
                            <p>Email: ${member.email}</p>
                            <p>Office Number: ${member.officeNumber}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                `
                break;
            case 'Engineer':
                teamCards += `
                <div class="card_item">
                    <div class="card_inner">
                        <div class="card_top">
                        <h1>${member.name}</h1>
                        </div>
                        <div class="card_bottom">
                        <div class="card_category">
                            ${member.getRole()}
                        </div>
                        <div class="card_info">
                            <p class="title">ID: ${member.id}</p>
                            <p>Email: ${member.email}</p>
                            <p>GitHub: ${member.github}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                `
                break;
            case 'Intern':
                teamCards += `
                <div class="card_item">
                    <div class="card_inner">
                        <div class="card_top">
                        <h1>${member.name}</h1>
                        </div>
                        <div class="card_bottom">
                        <div class="card_category">
                            ${member.getRole()}
                        </div>
                        <div class="card_info">
                            <p class="title">ID: ${member.id}</p>
                            <p>Email: ${member.email}</p>
                            <p>School: ${member.school}</p>
                        </div>
                        </div>
                    </div>
                    </div>
                `
                break;
        };
    });

    const display = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
	    <meta charset="UTF-8">
	    <title>Team Interface</title>
	    <link rel="stylesheet" href="./dist/css/style.css">
    </head>
    <body>
        <div class="wrapper">
            <div class="cards_wrap">
                ${teamCards}
            <div class="cards_wrap">
        <div class="wrapper">
    </body>
    </html>
    `

    fs.appendFileSync(path.join(__dirname, "/index.html"), display, "utf8");
};

startTeam();