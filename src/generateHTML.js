function createEmployeeCard(employee) {
  const role = employee.getRole();

  let specialItemKey, specialItemValue, specialItemVisibility;

  if (role === "Manager") {
    specialItemKey = "Office Number";
    specialItemValue = employee.getOfficeNumber();
    specialItemVisibility = "visible"
  } else if (role === "Engineer") {
    specialItemKey = "github";
    specialItemValue = employee.getGithub();
    specialItemVisibility = "visible"
  } else if (role === "Intern") {
    specialItemKey = "School";
    specialItemValue = employee.getSchool();
    specialItemVisibility = "visible"
  } else if (role === "Employee") {
    specialItemVisibility = "hidden"

  }

  return `
    <div class="card m-2" style="width: 18rem;">
      <div class="card-body">
        <h3 class="card-title">${employee.getName()}</h3>
        <h5 class ="card-subtitle mb-2 text-muted">${employee.getRole()}</h5>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${employee.getID()}</li>
        <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}"> ${employee.getEmail()}</a>
          </li>
        <li class="list-group-item" style="visibilty: ${specialItemVisibility};">${specialItemKey}: ${specialItemValue}</li>
      </ul>
    </div>
`;
}

function generateHTML(employees) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Employees</title>
  </head>
  <header>
    <h1 class="title">My Team</h1>
  </header>
  <body>
    <section class="d-flex justify-content-center">
    ${employees.map((employee) => createEmployeeCard(employee)).join("")}
    </section>
  </body>
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
  </html>`;
}

// how can i make the last list item change depending on if its manager, intern, engineer??
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// switch (employees.role) {
//   case "Manager" :
//     getOfficeNumber();

//   case "Engineer" :
//     employees.push(new Engineer (answers.name, answers.id, answers.email, answers.github));
//     break;

//   case "Intern" :
//     employees.push(new Intern (answers.name, answers.id, answers.email, answers.school));
//     break;
// }

module.exports = generateHTML;
