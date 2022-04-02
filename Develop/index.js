//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "projectName",
        message: "What is the name of the project?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a brief description"
    },
    {
        type: "input",
        name: "installation",
        message: "Write the installation process"
    },
    {
        type: "input",
        name: "usage",
        message: "What is the usage of this project?"
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Boost",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "tests",
        message: "Please enter any testing instructions you would like to provide for this project."
        
    },
    {
        type: "input",
        name: "contributing",
        message: "How can users contribute to this project."
    },

    {
        type: "input",
        name: "username",
        message: "Enter your Github Username"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email"
    }

];

//Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function(err){
        if (err){
            return console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
