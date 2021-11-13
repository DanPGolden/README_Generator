const generateMarkdown =require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");
const fs = require("fs");


const questions = [
{
    type: "input",
    name: "title",
    message: "What is the name of your project?"
},

{
    type: "input",
    name: "description",
    message: "Please describe your project."
},

{
    type: "input",
    name: "installation",
    message: "What steps are required to install your project?"
},

{
    type: "input",
    name: "usage",
    message: "Please provide instructions on how to use this application. ?"
},

{
    type: "input",
    name: "test",
    message: "How would you test this application?"
},

{
    type: 'input',
    message: 'List any other contributors on this project (If there are not any contributors, enter "none").',
    name: 'contributing',
  },

  {
    type: "list",
        message: "What license are you using? ",
        name: "license",
        choices: [

                "None",
                "Apache License 2.0",
                "The Unlicense",
                "Boost Software License 1.0",
                "GNU",
                "MIT License",
                "Mozilla",
                "Open"

        ]
},

{
    type: "input",
    name: "username",
    message: "What is your Github username?"
},

{
    type: "input",
    name: "email",
    message: "What is your email address?"
},

{
    type: "input",
    name: "repo",
    message: "What is your repository link?"
},

];

//*************************************************** */
function writeToFile(fileName, data) {
    ("README.md", generateMarkdown.generateMarkdown(data), function (err){
        if(err) throw err;
        console.log("Complete")    
    })
}

//************************************************** */
function init() {
    inquirer.prompt(questions).then(function(userInfo) {
        const markdownString = generateMarkdown(userInfo)
        fs.writeFile('README.md', markdownString, function(err) {
            if(err) {
                console.log(err)
            }
            else {
                console.log('README file completed')
            }
        })
    
    })
};


init();
// console.log("This is the README generator")