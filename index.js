const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = ({ name, color, shape, linkedin }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <header class="p-5 mb-4 header bg-light">
    <div class="container">
      <h1 class="display-4">Hi! My name is ${name}</h1>
      <p class="lead">I am from ${color}.</p>
      <h3>Example heading <span class="badge bg-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">My GitHub username is ${shape}</li>
        <li class="list-group-item">LinkedIn: ${linkedin}</li>
      </ul>
    </div>
  </header>
</body>
</html>`;

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
      choices:['red', 'orange', 'yellow', 'green','blue', 'purple'],
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
      choices: ['red', 'orange', 'yellow', 'green','blue', 'purple'],
    },
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });



  //THEN an SVG file is created named `logo.svg` AND the output text "Generated logo.svg" is printed in the command line WHEN I open the `logo.svg` file in a browser THEN I am shown a 300x200 pixel image that matches the criteria I enter