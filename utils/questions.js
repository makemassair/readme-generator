// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a brief description of your project'
    },
    {
        type: 'input',
        name: 'about',
        message: 'Please enter a what your project is about'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is this project used for?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the approriate license for this project',
        choices: [
            'Apache 2.0 License',
            'GNU GPL v3',
            'The MIT License',
            'ISC License (ISC)',
            'BSD 2-Clause License',
            'BSD 3-Clause License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 1.0',
            'Mozilla Public License 2.0',
            'The Unlicense'
        ]
        // filter(val) {
        //      return val.toLowerCase(); 
        // }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who, if any, are the contributors to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Is a test included?'
    },
    {
        type: 'input',
        name: 'author',
        message: 'Who is the author of this project?'
    },
    {
        type: 'input',
        name: 'author',
        message: 'Who is the author of this project?'
    },
    {
        type: 'input',
        name: 'url',
        message: 'What is the URL of the deployed project?'
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is the URL of this GitHub repo?'
    }
];

module.exports = {
    questions: questions,
  };