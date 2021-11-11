// function to generate markdown for README
// const questions = require('../../index.js')

function generateMarkdown(data) {
    return ` 
   # ${data.title}  
   [![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
   ## Description
    
   ${data.description}
   ## Table of Contents
   <details>
   <summary>Expand to view Table of Contents</summary>
   
    <p>
   
    1. [Documentation](#documentation)
    2. [Installation](#installation)
    3. [Usage](#usage)
    4. [Tests](#tests)
    5. [Contributing](#contributing)
    6. [Contact](#questions)
    
   
   </p>
   </details>
  ## Documentation
  ### Installation 
  ${data.installation}
  ### Usage 
  ${data.usage}
  ### Tests 
  ${data.test}
  ## Contributing 
  ${data.contributing}
  ## Contact
  If you have any questions about this project or would like to report a bug, please email ${data.email} 
  `;
  }
  
  module.exports = generateMarkdown;