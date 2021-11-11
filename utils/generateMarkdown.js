// function to generate markdown for README
// const questions = require('../../index.js')

function generateMarkdown(data) {
    return ` 
   # ${data.title}  
   [![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
   
    
 
   ## Table of Contents
    * Description
    * Installation
    * Usage
    * Tests
    * Contributing
    * License
    * Contact
    * Repository
    
  ***
  ## Description
  ${data.description}
  ### Installation 
  ${data.installation}
  ### Usage 
  ${data.usage}
  ### Tests 
  ${data.test}
  ## Contributing 
  ${data.contributing}
  ## License
  ${data.license}
  ## Contact
  If you have any questions about this project or would like to report a bug, please email ${data.username} at ${data.email}
  ## Repository
  ${data.repo} 

  `;
  }
  
  module.exports = generateMarkdown;