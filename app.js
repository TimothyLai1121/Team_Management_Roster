// installing inquirer //
// inquirer version is 9.1.4 //
// downgrade to 8.2.4 according to classes //
// adding fs module to read and write files //
// this one no need to use import method, type = module in package.json is enough //
// npm i jest //

const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is your manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your manager's id?"
    },
]).then(answers => {
  let html = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Team Manager</title>
    <style>
        body {
            background-color: #f7f7f7;
            font-family: Arial, sans-serif;
            font-size: 16px;
            line-height: 1.5;
            color: #333;
        }

        h1 {
            text-align: center;
            font-size: 36px;
            margin-top: 50px;
        }

        p {
            margin: 0;
            padding: 10px 0;
            font-size: 20px;
            text-align: center;
        }

        p:first-of-type {
            border-top: 1px solid #ddd;
        }
    </style>
</head>
<body>
    <h1>Team Manager</h1>
    <p>Name: Tien</p>
    <p>ID: 001</p>
</body>
</html>

  `;

  fs.writeFile("team.html", html, err => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});
