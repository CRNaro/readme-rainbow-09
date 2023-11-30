// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project? Why did you build this project?  What problem does it solve? What did you learn? What did you learn from this project?',
    };
    {
        type: 'confirm',
        name: 'tableOfContents',
        message: 'Would you like to include a table of contents?',
        default: true,
    };
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    };
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
    };
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links',
    };
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    };
    {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, list them here.',
    };
    {
        type: 'input',
        name: 'contributing',
        message: 'If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so.',
    };
    {
        type: 'input',
        name: 'tests',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them.',
    };
    {
        type: 'input',
        name: 'questions',
        message: 'Please enter your GitHub username.',
    };
    {
        type: 'input',
        name: 'questions',
        message: 'Please enter your email address.',
    };
    {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, list them here.',
    };
    {
        type: 'input',
        name: 'tests',
        message: 'Any tests you have run for your application, please list them here.',
    };
];
.then (answers => {
    const readmeContent = generateReadme(answers);
    fs.writeFile('README.md', readmeContent);
    console.log('README.md successfully created!');
})
.catch(error => {
    console.error('Error generating README.md: ', error);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();