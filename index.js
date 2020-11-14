const fs = require('fs');
const inquirer = require('inquirer');
const axios = require('axios');
const generateMarkdown = require('./generateMarkdown');

function init() {
    // array of questions for user
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Title of project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Description of project?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Installation instructions?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage info?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Contribution guidelines?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Test instructions?',
        },
        {
            type: 'list',
            name: 'licenses',
            message: 'Choose a license.',
            choices: ['MIT', 'lApache', 'ISC'],
        },
        {
            type: 'input',
            name: 'badge',
            message: 'Input your badge URL.  For more info, go to https://shield.io/',
        },
        {
            type: 'username',
            name: 'username',
            message: 'Username?',
        },
        {
            type: 'email',
            name: 'email',
            message: 'Email address?',
        },
    ]).then((response) => {
        // function to write README file
        fs.writeFile('README.md', generateMarkdown(response), (err) =>
            err ? console.log(err) : console.log('Success!'))
    });
    //generateMarkdown();
}
// function call to initialize program
init();






// function to initialize program
// function init() {
// inquirer.prompt().then((response) => {
//     console.log(response);
//     // function to write README file
//     fs.writeFile('README.MD', JSON.stringify(response), (err) =>
//         err ? console.log(err) : console.log('Success!'))
// });

