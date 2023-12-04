// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdownIt = require('markdown-it');
const md = new markdownIt();
const generateMarkdown = require('./utils/generateMarkdown.js');
const { parse } = require('path');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project? Why did you build this project?  What problem does it solve? What did you learn? What did you learn from this project?',
    },
    {
        type: 'confirm',
        name: 'tableOfContents',
        message: 'Would you like to include a table of contents?',
        default: true,
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, list them here.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so.',
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Please enter your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
    },
    {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, list them here.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Any tests you have run for your application, please list them here.',
    },
];
// TODO: Create a function to initialize app
// TODO: Create a function to write README file
function init() {
    inquirer.prompt(questions)
.then (answers => {
    const readmeContent = generateMarkdown(answers);
    fs.writeFile('README.md', readmeContent, err => {
        if (err) {
            console.log(err);
            return;
        }

})
});
}
// Function call to initialize app
init();

//function writeToFile(fileName, data) {} - This was what was given to us in the starter code.  I'm not sure if I need to use this or not.  I'm not sure how to use it if I do need to use it.



