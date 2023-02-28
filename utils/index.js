// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title'
        ,message: 'What is the title of your project?'
    },{
        name: 'description',
        message: "Enter a description: "
    },{
        name: 'installation',
        message:'Enter installation instructions: '
    },{
        name: 'usage',
        message: 'Enter usage information: '
    },{
        name: 'contribution',
        message: 'Add contribution guidelines: '
    },{
        name: 'testInstructions',
        message: 'Enter test instructions: '
    },{
        name: 'license',
        message: 'Select your license type: ',
        type: 'list',
        choices: ['None', 'MIT License', 'The Unlicense', 
        'Mozilla Public License 2.0', 'GNU General Public Licensev2.0']
    },{
        name: 'username',
        message: 'Enter your GitHub username: '
    },{
        name: 'email',
        message: 'Enter your E-mail address: '
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.error(err) : console.log('README Generated.')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        writeToFile('../generatedREADME.md', generateMarkdown(answers))
    })
    .catch((error) => {
        console.error(error)
    })
}

// Function call to initialize app
init();
