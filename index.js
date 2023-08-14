const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js');

const init = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmation',
            message: 'Would You Like To Create An SVG File?',
        }
    ])
    .then((confirmAnswer) => {
        if(confirmAnswer.confirmation) {
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
            choices: shapes.shapeChoices,
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

const generateSVG = ({ characters, textColor, shape, shapeColor }) => {
    const svgContent =
`<svg version="1.1"
    width="300" height="200" 
    xmlns="http://www.w3.org/2000/svg">

    <rect width="100%" height="100%" fill="white" />
    
    ${shapes.createShape(shape, shapeColor)}

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${characters}</text>
    
</svg>`

    fs.writeFile('logo.svg', svgContent, (err) => {
        if (err) {
            console.error('ERROR:', err);
        } else {
            console.log('Your SVG File Will Now Be Created!');
        }
    });
};

init();