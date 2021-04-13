// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');


// TODO: Create an array of questions for user input
const questions = [
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
      choices: [ "none", "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "BSD T-Clause 'Simplified' License",
      "BSD 3-Clause 'New' or 'Revised' License",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v2.1",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "GNU Lesser General Public License v3.0",
      "Mozilla Public License 2.0",
      "The Unilicense",]
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
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    console.log(data);
}

// TODO: Create a function to initialize app. 
//Calls inquirer and writeToFile function
function init() {
inquirer
    .prompt(questions)
    .then((response) => {
    writeToFile('README.md', response)
    });

}

// Function call to initialize app
init();
