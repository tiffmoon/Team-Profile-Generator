const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const fs = require("fs");
const { prompt } = require("inquirer");
const generateHTML = require("./src/generatehtml");

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

// How do i get the questions to repeat again if they selecte Y to adding a new team member?

const employees = [];

async function askForNewEmployee() {
  var answers = await questions();

  console.log(answers);

  switch (answers.role) {
    case "Manager":
      employees.push(
        new Manager(
          answers.name,
          answers.id,
          answers.email,
          answers.officeNumber
        )
      );
      break;

    case "Engineer":
      employees.push(
        new Engineer(answers.name, answers.id, answers.email, answers.github)
      );
      break;

    case "Intern":
      employees.push(
        new Intern(answers.name, answers.id, answers.email, answers.school)
      );
      break;
    // console.log(employees);
  }
  // ask the qustions again depeding if user wanted to add new employee
  const wantsToAddNewMember = await  inquirer.prompt([
    {
      type: "confirm",
      message: "Do you want to add another team member?",
      name: "addMember",
    },
  ]).then((ans) => {
    return ans.addMember;
  })
  

  if(wantsToAddNewMember){
    await askForNewEmployee();
  }


}

async function init() {
  await askForNewEmployee();

  console.log(employees);

  fs.writeFileSync(__dirname + "/dist/index.html", generateHTML(employees)); // is this right??
  // .then((answers) => fs.writeFileSync('index.html', generateMarkdown(answers)))
  // .then(() => console.log('Successfully created README.md!'))
  // .catch((err) => console.error(err));
}

// const promptA = await inquirer.prompt({
//   type: 'confirm',
//   name: 'continue',
// });

// if (promptA) {
//   init();
// }

init();

// function

// fs.writeFileSync('index.html', generateHTML(answers), (err) =>
//       err ? console.log(err) : console.log('Successfully created index.html!')
//     );

// How do i create a css file as well? or can that aready be created?
