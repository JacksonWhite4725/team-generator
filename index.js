const inquirer = require('inquirer');
const fs = require('fs');

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
    /*
    After inquiering for the data, create an if-else statement to ask job specific questions, then append to a prebuilt index.html file as a card.
    .then((data) => {
        const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('Success!')
        );
});
*/ 