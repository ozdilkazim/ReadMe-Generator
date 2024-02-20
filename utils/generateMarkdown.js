// function to generate markdown for README
function generateMarkdown(answers) {
    let licenseBadge = generateBadge(answers.license);
    console.log(licenseBadge)
    return `![License](${licenseBadge})
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
If you have further questions, p
lease click on my [Github Profile](https://www.github.com/${answers.gitHubName}) or contact me at [${answers.email}](${answers.email})`;
}

function generateBadge(license) {
    let badge;
    switch (license) {
        case 'Open Software License 3.0':
            badge = { name : 'Open+Software+License+3.0', color : `red`};
            break;
        case 'MIT License':
            badge = { name : 'MIT+License', color : `purple`};
            break;
        case 'GNU General Public License v3.0 or later':
            badge = { name : 'GNU+General+Public+License+v3.0+or+later', color : `blue`};
            break;
        case 'Academic Free License v3.0':
            badge = { name : 'Academic+FreeLicensev3.0', color : `green`};
            break;
        case 'Non-Profit Open Software License 3.0':
            badge = { name : 'Non-Profit+Open+Software+License+3.0', color : `yellow`};
            break;    
    }
    return `https://img.shields.io/static/v1?label=License&message=${badge.name}&color=${badge.color}`
}
module.exports = generateMarkdown;

