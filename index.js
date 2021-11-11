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
    message: "How could a user install this?"
},

{
    type: "input",
    name: "usage",
    message: "How do you use this?"
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
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
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


function writeToFile(fileName, data) {
    ("README.md", generateMarkdown.generateMarkdown(data), function (err){
        if(err) throw err;
        console.log("Complete")    
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(userInfo) {
        // userInfo is an object
        // const userInfo = {
            //title: title from the user
            //description: description from the user
        // }
        const markdownString = generateMarkdown(userInfo)
        fs.writeFile('README.md', markdownString, function(err) {
            if(err) {
                console.log(err)
            }
            else {
                console.log('README file completed')
            }
        })
    },
    // make the questions in the questions array
    // finish making the string that will be turned into the markdown file
    // the string will be in the generateMarkdown function {
     
     e => {
        console.log(`The file could not be generated because the user does not exist.`);
    })
};


init();
// console.log("This is the README generator")