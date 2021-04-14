// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is your project title?:',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the project description?:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please enter installation instructions:',
      name: 'instructions',
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
      name: 'license',
      choices: [ 
        "none", 
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "Eclipse Public License 2.0",
        "Mozilla Public License 2.0",]
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username:',
        name: 'userName',
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
    let generateRead=markdown(data);
    fs.writeFile(fileName, generateRead, (err) => {
    err ? console.error(err) : console.log('Success!')
    }
);
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
