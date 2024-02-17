// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} 
${data.description}

## Table of Contents

* Installation
* Usage 
* License
* Contributing
* Tests
* Questions


## Installation
${data.installation}
## Usage 
${data.usage}
## License
${data.license}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
If you have further questions, please click on my <a href='https://www.github.com/${data.gitHubName}'>Github Profile</a> or contact me at <a mailto='${data.email}'>${data.email}</a> `;
}

module.exports = generateMarkdown;
