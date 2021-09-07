const inquirer = require('inquirer');

class Engineer {
    engineerInfo() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is your GitHub account?',
                },
            ])
            .then((data) => {
                return data;
            });
    }
}

module.exports = Engineer;