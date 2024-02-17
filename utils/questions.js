// array of questions for user
const questions = [
    {
        type: 'input',
        name : 'gitHubName',
        message : 'What is your Github username?'
    },
    {
        type: 'input',
        name : 'email',
        message : 'What is your e-mail address?'
    },
    {
        type: 'input',
        name : 'title',
        message : 'What is the title of Read Me file?'
    },
    {
        type: 'input',
        name : 'description',
        message : 'What is the description?'
    },
    {   // LICENSE LIST 
        type: 'list',
        name : 'license',
        message : 'Please select a license',
        choices : ['Open Software License 3.0', 'MIT License', 'GNU General Public License v3.0 or later', 'Academic Free License v3.0', 'Non-Profit Open Software License 3.0',],
    },
    {
        type: 'input',
        name : 'installation',
        message : 'What is the installation guide?'
    },
    {
        type: 'input',
        name : 'usage',
        message : 'How to use project?'
    },
    {
        type: 'input',
        name : 'contributing',
        message : 'What is the contribution guidelines?'
    },
    {
        type: 'input',
        name : 'test',
        message : 'Whats is the test instructions?'
    },
];

module.exports = questions;