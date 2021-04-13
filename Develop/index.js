// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?:',
      name: 'projectTitle',
    },
    {
      type: 'input',
      message: 'What is the project description?:',
      name: 'projectDescription',
    },
    {
      type: 'input',
      message: 'Please enter installation instructions:',
      name: 'installInstructions',
    },
    {
      type: 'input',
      message: 'Please enter usage information:',
      name: 'usageInformation',
    },
    {
      type: 'input',
      message: 'Please enter contribution guidelines:',
      name: 'contributionGuidelines',
    },
    {
      type: 'input',
      message: 'Please enter test instructions:',
      name: 'testInstructions',
    },
    {
      type: 'list',
      message: 'Please enter any licenses for your application:',
      name: 'licenses',
      choices: ['License 1','License 2','License 3', 'License 4']
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username:',
        name: 'githubUserName',
    },
    {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'email',
    },
  ])
  .then((response) =>
  console.log(response)
    // response.confirm === response.password
    //   ? console.log('Success!')
    //   : console.log('You forgot your password already?!')
  );

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
