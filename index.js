// installing inquirer //
// inquirer version is 9.1.4 //
// downgrade to 8.2.4 according to classes //
// adding fs module to read and write files //
// this one no need to use import method, type = module in package.json is enough //
// npm i jest //

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const fs = require("fs");

let team = [];


inquirer
  .prompt([
 
    {
      type: "input",
      name: "name",
      message: "What is your manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is your manager's id?",
    },
    {
      type: "input",
      name: "email",
      message: "What's is your manager's email?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is your manager's office number?",
    },
  ])
  .then((answers) => {
   
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    team.push(manager);
    buildTeam();
  });

function buildTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "memberType",
        message: "What type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more team members",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.memberType) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          generateHTML(team);
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
        
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the engineer's office number?",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      team.push(engineer);
      buildTeam();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the intern's id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the intern's office number?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      team.push(intern);
      buildTeam();
    });
}


function generateHTML(team) {
 
    const employeeCards = team.map(employee => {
      let icon;
      if (employee.getRole() === 'Manager') {
        icon = 'fa-mug-hot';
      } else if (employee.getRole() === 'Engineer') {
        icon = 'fa-glasses';
      } else if (employee.getRole() === 'Intern') {
        icon = 'fa-user-graduate';
      }
      return `
        <div class="card">
          <div class="card-header">
            <h2>${employee.name}</h2>
            <h3><i class="fas ${icon}"></i> ${employee.getRole()}</h3>
          </div>
          <div class="card-body">
            <p>ID: ${employee.id}</p>
            <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
            ${employee.officeNumber ? `<p>Office: ${employee.officeNumber}</p>` : ''}
          </div>
        </div>
      `;
    });
  
    const html = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>My Team</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-Q8i/X+965DzO0rZ4aSPX4me5ad4MpqEWS70DIRfOENeParaq6Qw7woXH2tI1z9T" crossorigin="anonymous" />
          <link rel="stylesheet" href="./style.css" />
        </head>
        <body>
          <header>
            <h1>Roster</h1>
          </header>
          <main>
            <div class="container">
            <div class="row">
                ${employeeCards.join("")}
              </div>
            </div>
          </main>
        </body>
      </html>
    `;
    
    const filename = "./dist/team.html";
    fs.writeFileSync(filename, html);
    console.log(`Team profile generated successfully at ${filename}!`);
    
    return {
      filename,
      html
    };
  }
  


  module.exports = generateHTML;
  