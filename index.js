const inquirer = require('inquirer');
const fs = require('fs');
//const generateMarkdown = require('generateMarkdown.js');

// array of questions for user
inquirer
    .prompt([
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
            name: 'installation instructions',
            message: 'Installation instructions?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Usage info?',
        },
        {
            type: 'input',
            name: 'contribution guidelines',
            message: 'Contribution guidelines?',
        },
        {
            type: 'input',
            name: 'test instructions',
            message: 'Test instructions?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Test instructions?',
            choices: ['license1', 'license2', 'license3'],
        },
        {
            type: 'username',
            name: 'username',
            message: 'Username?',
        },
        {
            type: 'email',
            name: 'email address',
            message: 'Email address?',
        },
    ]).then((response) => {   
        console.log(response);    
    });
    
    // function to write README file
    //...
    //);
             

    //     // function to initialize program
    //     function init(questions) {

    //     }

    //     // function call to initialize program
    //     init(questions);