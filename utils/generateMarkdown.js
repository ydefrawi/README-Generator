// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none'){
    return "";
  } else if (license==="Apache-2.0"){
    return "https://img.shields.io/badge/License-Apache%202.0-blue.svg"
  } else if (license==="GPL-3.0") {
    return "https://img.shields.io/badge/License-GPLv3-blue.svg"
  } else if (license==="MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg"
  } else {
    return "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg"
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none'){
    return "";
  } else {
    return `
    https://opensource.org/licenses/${license}
    `
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none'){
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = data.license;
  let licenseLower = data.license.toLowerCase();


  return `
  
  # ${data.title}

  [![License: ${data.license}](${renderLicenseBadge(license)})](${renderLicenseLink(licenseLower)})

  ## Description
  ${data.description}

  ## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution Guidelines](#contributions)
  * [Testing](#testing)
  * [Questions](#questions)

  ## Installation
  ${data.instructions}

  ## Usage
  ${data.usageInformation}

  ## Contributions
  ${data.contributionGuidelines}

  ## Testing
  ${data.testInstructions}

  ## Questions
  Feel free to reach me with any questions related to this project at [My GitHub Profile](https://github.com/${data.userName}) or by email at ${data.email}

`;
}

module.exports = generateMarkdown;
