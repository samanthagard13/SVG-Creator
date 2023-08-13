const fs = require('fs');
const inquirer = require('inquirer');
const { shapeChoices, createImage } = require('./lib/shapes.js');

const init = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmation',
            message: 'Would You Like To Create An SVG File?',
        }
    ])
    .then((confirmAnswer) => {
        if(confirmAnswer.confirm === 'Yes') {
            createFile();
        } else {
            console.log('Have a nice day!')
        }
    })
};

const createFile = () => {
    console.log('Answer Each Question To Create Your Own Logo.')
    inquirer.prompt([
        {
            type: 'input',
            name: 'characters',
            message: 'Enter three characters to display in your image.',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What color would you like the characters? (Enter a name or Hex#)',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like in the background?',
            choices: shapeChoices,
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like the shape to be? (Enter a name or Hex#)',
        }
    ])
    
    .then((answers) => {
        generateSVG(answers);
    })
};

const generateSVG = ({ characters, textColor, shape, shaapeColor }) => {
    const svgContent =
    `<svg version="1.1"
        width="300" height="200" 
        xmlns="http://www.w3.org/2000/svg">

        <rect width="100%" height="100%" fill="white" />
    
        ${shape}
    
    </svg>`

    fs.writeFile('logo.svg', svgContent, (err) =>
        err / console.log('ERROR: ', err) || console.log('Your SVG File Will Now Be Created!')
    );
};

init();