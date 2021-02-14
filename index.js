/*
Psuedo Code
Assets needed - Description, Table of Contents, Instillation, Usage, License, Contribuitors, Testing, License, Contact Questions
Need to ask for - Project title, description & above assets

*/
const fs = require('fs');
const path = require('path')
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your application?'
    },
    {
        type: 'input',
        name: 'instillation',
        message: 'How will users install your application? Please give very detailed step by step instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will your application be used?'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What testing software did you use to test your application? Please describe how users can test your application'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who were your contributors on your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Who licensed your application?',
        choices: ['Amazon', 'Facebook', 'Google', 'Twitter']
    },
    {
        type: 'input',
        name: 'email',
        message: 'What email address can people use to contact you about your application?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname, fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(res => {
        writeToFile('ReadMe.md', generateMarkdown({...res}))
    })
}

// Function call to initialize app
init();

