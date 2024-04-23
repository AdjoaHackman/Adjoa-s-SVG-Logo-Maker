const inquirer = require('inquirer');
const fs = require('fs');
const {Square, Triangle, Circle} = require("./lib/shapes");
const generateSVG = (shape, characters, text) =>
    //     `<!DOCTYPE html>
    // <html lang="en">
    // <head>
    //   <meta charset="UTF-8">
    //   <meta http-equiv="X-UA-Compatible" content="ie=edge">
    //   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    //   <title>Document</title>
    // </head>
    // <body>
    `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><g>
${shape}
<text x="90" y="110" fill="${text}" font-size="35">
${characters} 
</text>
</g>
</svg>`;
// </body>
// </html>`

inquirer
    //have to call the function on inquirer. Need to define it as an object here
    .prompt([
        {
            type: 'input',
            name: 'characters',
            message: 'Please choose 3 random characters',
        },
        {
            type: 'list',
            name: 'text',
            message: 'Please choose a color for your text',
            choices: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Please choose a shape',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'list',
            name: 'color',
            message: 'Please enter a color for your shape',
            choices: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
        },
    ])
    .then((answers) => {
        if (answers.shape === 'triangle') {
            const shape = new Triangle();
            shape.setColor(answers.color)
            const SVGPageContent = generateSVG(shape.render(), answers.characters, answers.text)

            fs.writeFile('logo.svg', SVGPageContent, (err) =>
                err ? console.log(err) : console.log('Generated logo.svg!')
            );
        }
        if (answers.shape === 'circle') {
            const shape = new Circle();
            shape.setColor(answers.color)
            const SVGPageContent = generateSVG(shape.render(), answers.characters, answers.text)

            fs.writeFile('logo.svg', SVGPageContent, (err) =>
                err ? console.log(err) : console.log('Generated logo.svg!')
            );
        }
        if (answers.shape === 'square') {
            const shape = new Square();
            shape.setColor(answers.color)
            const SVGPageContent = generateSVG(shape.render(), answers.characters, answers.text)

            fs.writeFile('logo.svg', SVGPageContent, (err) =>
                err ? console.log(err) : console.log('Generated logo.svg!')
            );
        }
    });
