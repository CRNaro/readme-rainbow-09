
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string  
// TODO: Create a function that returns a license badge based on which license is passed in
// TODO: Create a function that returns the license link


function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)]\n`; //(https://opensource.org/licenses/${license})
  }
  if (license === "Apache") {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)]\n`;
  }
  if (license === "GPL") {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)]\n`;
  }
  if (license === "MPL") {
    return `[![License: ${license}](https://img.shields.io/badge/License-${license}-brightgreen.svg)]\n`;
  }
  if (license === "none") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)\n`;
  }
}


function renderLicenseLink(license) {
  if (license === "MIT") {
    return `https://opensource.org/licenses/MIT\n`;
  }
  if (license === "Apache") {
    return `https://opensource.org/licenses/Apache-2.0\n`;
  }
  if (license === "GPL") {
    return `https://www.gnu.org/licenses/gpl-3.0\n`;
  }
  if (license === "MPL") {
    return `https://opensource.org/licenses/MPL-2.0\n`;
  }
  if (license === "none") {
    return `\n* [License](#license)\n`;
  }
}

// TODO: Create a function to generate markdown for README
// Defined sections for the table of contents
const sections = ['title', 'description', 'installation', 'usage', 'credits', 'license', 'features', 'tests'];
// Defined function to generate markdown for README
function generateMarkdown(answers) {
  const licenseBadge = renderLicenseBadge(answers.license);
  const licenseLink = renderLicenseLink(answers.license);
  //const licenseSection = renderLicenseSection(answers);
  let tableOfContents = "";
  if (answers.tableOfContents) {
    tableOfContents = sections
      .map((section) => `- [${section}](#${section.toLocaleLowerCase()})`)
      .join("\n");
  }
  return ` 
# ${answers.title}
    
## Description 
${answers.description}


${tableOfContents ? `## Table of Contents\n${tableOfContents}` : ""}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.credits}

## License
${licenseBadge} 
${licenseLink}


## Features
${answers.features || "No features provided"}

## Tests
${answers.tests || "No tests provided"}
`;
}
// Exports the generateMarkdown function for use in index.js
module.exports = generateMarkdown;
