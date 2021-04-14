// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Installation
  ${data.instructions}

  ## Usage Information
  ${data.usageInformation}

  ## Contribution guidelines
  ${data.contributionGuidelines}

  ## Testing instructions
  ${data.testInstructions}

  ## Questions
  Feel free to reach me with any questions related to this project at [My GitHub Profile](https://github.com/${data.userName}) or by email at ${data.email}

`;
}

module.exports = generateMarkdown;
