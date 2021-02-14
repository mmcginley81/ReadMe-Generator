/*
Psuedo Code
Assets needed - Description, Table of Contents, Instillation, Usage, License, Contribuiting, Test, Questions
Need to ask for - Project title, description & above assets

WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
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
        message: 'What testing software did you use?',
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

