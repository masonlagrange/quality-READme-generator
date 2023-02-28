// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return ''
  } else if(license === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if(license === 'The Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  } else if(license === 'Mozilla Public License 2.0') {
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if(license === 'GNU General Public Licensev2.0') {
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return ''
  } else if(license === 'MIT License') {
    return 'https://opensource.org/license/mit/'
  } else if(license === 'The Unlicense') {
    return 'https://unlicense.org/'
  } else if(license === 'Mozilla Public License 2.0') {
    return 'https://www.mozilla.org/en-US/MPL/2.0/'
  } else if(license === 'GNU General Public Licensev2.0') {
    return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None') {
    return ''
  } else {
      return `${license}  
[License Link](${renderLicenseLink(license)})
`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}

## Table of Contents 
${renderLicenseBadge(data.license)}
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contribution}

## Tests
${data.testInstructions}

## License
${renderLicenseSection(data.license)}

## Questions
[GitHub Page](https://github.com/${data.username})

#### You can email here for any additional questions. Emails will be answered within 24h
[Email](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
