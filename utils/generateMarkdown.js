// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})\n`;
  }  
  if (license === 'Apache') {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)]\n`;
  }
  if (license === 'GPL') {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)]\n`;
  }
  if (license === 'DPL') {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)]\n`;
  }
  if (license === 'none') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)\n`;  //Added what Gisela had
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://opensource.org/licenses/MIT\n`;
  }
  if (license === 'Apache') {
    return `https://opensource.org/licenses/Apache-2.0\n`;
  }
  if (license === 'GPL') {
    return `https://www.gnu.org/licenses/gpl-3.0\n`;
  }
  if (license === 'DPL') {
    return `https://opensource.org/licenses/DPL\n`;
  }
  if (license === 'none') {
    return `\n* [License](#license)\n`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return `This project is licensed under the [MIT license](https://opensource.org/licenses/MIT)\n`;
  }
  if (license === 'Apache') {
    return `This project is licensed under the [Apache license](https://opensource.org/licenses/Apache-2.0)\n`;
  }
  if (license === 'GPL') {
    return `This project is licensed under the [GPL license](https://www.gnu.org/licenses/gpl-3.0)\n`;
  }
  if (license === 'DPL') {
    return `This project is licensed under the [DPL license](https://opensource.org/licenses/DPL)\n`;
  }
  if (license === 'none\n') {
    return '';
  }
}
// change all answers to answers?
// TODO: Create a function to generate markdown for README

function generateMarkdown(answers) {
  //why are these coming back as undefined?
  let licenseBadge = renderLicenseBadge(answers.license);
  let licenseLink = renderLicenseLink(answers.license);
  let licenseSection = renderLicenseSection(answers.license);
  const tableOfContents = Object.keys(answers).map(key =>`- [${key}](#${key})`).join('\n');  
return ` 
# ${answers.title}
    
## Description 
${answers.description}

## Table of Contents
${tableOfContents}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.credits}

## License
${licenseBadge} 
${licenseLink}\n
${licenseSection}\n

## Features
${answers.features || 'No features provided'}

## Tests
${answers.tests || 'No tests provided'}
`;
}

module.exports = generateMarkdown;