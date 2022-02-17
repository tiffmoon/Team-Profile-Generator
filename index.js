const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const { prompt } = require("inquirer");
const generateHTML = require("./src/generatehtml");

// questions that we will ask user - enter information about team members
const questions = () => {
  return inquirer.prompt([
    {
      type: "list",
      message: "What is your role?",
      name: "role",
      choices: ["Manager", "Engineer", "Intern", "Employee"],
    },
    {
      type: "input",
      message: `What is your name?`,
      name: "name",
      validate(answer) {
        if (!answer) {
          return "Pretty please, fill your name!";
        }
        return true;
      },
    },
    {
      type: "input",
      message: `What is your id?`,
      name: "id",
      validate(answer) {
        if (isNaN(answer)) {
          return "Pretty please, fill your ID!";
        }
        return true;
      },
    },
    {
      type: "input",
      message: `What is your email?`,
      name: "email",
      validate(answer) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(answer)) {
          return "Pretty please, provide a valid email address!";
        }
        return true;
      },
    },
    {
      type: "input",
      message: `What is your office number?`,
      name: "officeNumber",
      when: (input) => input.role === "Manager",
      validate(answer) {
        if (isNaN(answer)) {
          return "Pretty please, fill your office number!";
        }
        return true;
      },
    },
    {
      type: "input",
      message: `What is your github username?`,
      name: "github",
      when: (input) => input.role === "Engineer",
      validate(answer) {
        if (!answer) {
          return "Pretty please, fill your github username!";
        }
        return true;
      },
    },
    {
      type: "input",
      message: `What is your school?`,
      name: "school",
      when: (input) => input.role === "Intern",
      validate(answer) {
        if (!answer) {
          return "Pretty please, fill your school!";
        }
        return true;
      },
    },
  ]);
};

const employees = []; // empty array for adding new employees

async function askForNewEmployee() {
  var answers = await questions();

  switch (answers.role) { // depending on the role they select, create new instance of role and push to employees array
    case "Manager" :
      employees.push(
        new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
      );
    break;
    case "Engineer" :
      employees.push(
        new Engineer(answers.name, answers.id, answers.email, answers.github)
      );
      break;
    case "Intern" :
      employees.push(
        new Intern(answers.name, answers.id, answers.email, answers.school)
      );
      break;
    case "Employee" :
      employees.push(
        new Employee(answers.name, answers.id, answers.email)
      );
      break;
  }
  // ask if they want to add another member - will return boolean value
  const wantsToAddNewMember = await inquirer
    .prompt([
      {
        type: "confirm",
        message: "Do you want to add another team member?",
        name: "addMember",
      },
    ])
    .then((ans) => {
      return ans.addMember;
    });

  if (wantsToAddNewMember) { // if 'True' then run questions again / add new employee
    await askForNewEmployee();
  }
}

async function init() { // runs ask for new employee and then generates HTML from emplyee data
  await askForNewEmployee();
  fs.writeFileSync(__dirname + "/dist/index.html", generateHTML(employees));
}


init();
