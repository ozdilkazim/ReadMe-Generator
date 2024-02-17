const fs = require("fs");
const path = require('path'); // Optional
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = require("./utils/questions");

// function to write README file
function writeToFile(fileName, info) { 
    fs.writeFile(fileName, info, (err)=> {
    console.log(err);
    })
}

// function to initialize program
async function init() {
    try {
      const answers = await inquirer.prompt(questions);
      const readmeGEN = generateMarkdown(answers);
      let filename = `README.md`
      await writeToFile(filename, readmeGEN);
    }
    catch (error) {
        console.error();
    }
}
// function call to initialize program
init();