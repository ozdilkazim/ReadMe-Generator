// function to generate markdown for README
function generateMarkdown(answers) {
    return `License: ${answers.license}
# ${answers.title}
${answers.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${answers.installation}
## Usage
${answers.usage}
## License
${answers.license}
## Contributing
${answers.contributing}
## Tests
${answers.test}
## Questions
If you have further questions, please click on my [Github Profile](https://www.github.com/${answers.gitHubName}) or contact me at [${answers.email}](${answers.email})`;
}
module.exports = generateMarkdown;
