// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

## Table of contents
___
​
- [Description](#Description)
- [Instillation](#Instillation)
- [Usage](#Usage)
- [Testing](#Testing)
- [Contributors](#Contributors)
- [License](#License)
- [Contact](#Contact)

## Description: 
  ${data.description}

## Instillation

  ${data.instillation}

## Usage

  ${data.usage}

## Testing

  ${data.testing}

## Contributors

  ${data.contributors}

## License

This application is licensed under ${data.license}

${renderLicenseBadge(data.license)}
  

## Contact

  If you would like to contact me you can use the links below.
  
  ${data.email}

  ${data.github}
  `
  
;
}

module.exports = generateMarkdown;
