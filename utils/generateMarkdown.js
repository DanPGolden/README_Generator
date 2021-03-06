// function to generate markdown for README
// const questions = require('../../index.js')

function generateMarkdown(data) {
    return ` 
   # ${data.title}  
   [![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)
   
  ***
  # Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Tests](#test)
  * [Contributing](#contributing)
  * [License](#license)
  * [Contact](#contact)
  * [Repository](#repository)
  
  ***
  ## Description
  ${data.description}
  ## Installation 
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## Tests 
  ${data.test}
  ## Contributing 
  ${data.contributing}
  ## License
  ${data.license}
  ## Contact
  If you have any questions about this project or would like an issue, please email ${data.username} at ${data.email}
  ## Repository
  ${data.repo} 

  `;
  }
  
  module.exports = generateMarkdown;