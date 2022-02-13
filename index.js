const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { prompt } = require('inquirer');


const questions = () => {
  return inquirer.prompt([
    {
      type: 'list',
      message: 'What is your role?',
      name: 'role',
      choices: ['Manager', 'Engineer', 'Intern', 'Employee'],
    },
    {
      type: 'input',
      message: `What is your name?`,
      name: 'name',
      validate(answer) {
        if(!answer) {
            return "Pretty please, fill your name!";
        }
        return true;
      } 
    },
    {
      type: 'input',
      message: `What is your id?`,
      name: 'id',
      validate(answer) {
        if(isNaN(answer)) {
          return "Pretty please, fill your ID!";
      }
      return true;
    } 
    },
    {
      type: 'input',
      message: `What is your email?`,
      name: 'email',
      validate(answer) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailRegex.test(answer)) {
            return "Pretty please, provide a valid email address!"
        }
        return true
    }
    },
    {
      type: 'input',
      message: `What is your office number?`,
      name: 'officeNumber',
      when: (input) => input.role === "Manager",
      validate(answer) {
        if(isNaN(answer)) {
            return "Pretty please, fill your office number!";
        }
        return true;
      }
    },
    {
      type: 'input',
      message: `What is your github username?`,
      name: 'github',
      when: (input) => input.role === "Engineer",
      validate(answer) {
        if(!answer) {
            return "Pretty please, fill your github username!";
        }
        return true;
      }
    },
    {
      type: 'input',
      message: `What is your school?`,
      name: 'school',
      when: (input) => input.role === "Intern",
      validate(answer) {
        if(!answer) {
            return "Pretty please, fill your school!";
        }
        return true;
      }
    },
    {
      type: 'confirm',
      message: 'Do you want to add another team member?',
      name: 'addMember',
    },
  ]);
};

// use GetName function in markdown 
// var maneger = new manager ()
// with the answers
// manager(answers.name, answers.)

// need to know in advanced what it is - call new Manager
// switch block based on type 

async function init() {
  const employees = [];

  var answers = await questions()
  console.log(answers)

  switch (answers.role) {
    case "Manager" :
      employees.push(new Manager (answers.name, answers.id, answers.email, answers.officeNumber));
      break;

    case "Engineer" :
      employees.push(new Engineer (answers.name, answers.id, answers.email, answers.github));
      break;
    
    case "Intern" :
      employees.push(new Intern (answers.name, answers.id, answers.email, answers.school));
      break;
  }
 
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