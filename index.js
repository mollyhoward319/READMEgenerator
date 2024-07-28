// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown";

// TODO: Create an array of questions for user input
    const questions = [ {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project? Provide installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project? Provide usage instructions:',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to your project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'How do you test your project? Provide testing instructions:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'None'],
      },
      {
        type: 'input',
        name: 'author',
        message: 'What is your name (or the name of the project author)?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },];    

    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => err ? console.error(err) : console.log('You have successfully created your README file!'))
}

// // TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions)
.then((data) => {
    writeToFile(`README.md`, data);
})
    .catch((error) => {
        console.error('Error', error);
    });
}

// // Function call to initialize app
init();
