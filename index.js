const fs = require("fs");
const path = require('path'); // Optional
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name : 'title',
        message : 'What is the title of Read Me file?'
    }
];
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        fs.writeFile('log.txt', JSON.stringify(answers), (err)=> {
            console.log(err);
        })
    });
}

// function call to initialize program
init();