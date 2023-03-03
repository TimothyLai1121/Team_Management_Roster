// installing inquirer //
// inquirer version is 9.1.4 //
// downgrade to 8.2.4 according to classes //
// adding fs module to read and write files //
// this one no need to use import method, type = module in package.json is enough //



const inquirer = require('inquirer');
const fs = require('fs');

const teamMembers = [];

function promptManager() {
  console.log("Please enter the team manager's information:");
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Name:"
    },
    {
      type: "input",
      name: "id",
      message: "Employee ID:"
    },
    {
      type: "input",
      name: "email",
      message: "Email address:"
    },
    {
      type: "input",
      name: "officeNumber",
      message: "Office number:"
    }
  ]).then(answers => {
    const manager = {
      name: answers.name,
      id: answers.id,
      email: answers.email,
      role: "Manager",
      officeNumber: answers.officeNumber
    };
    teamMembers.push(manager);
    promptMenu();
  });
}
