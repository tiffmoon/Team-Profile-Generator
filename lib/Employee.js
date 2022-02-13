class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }
  getEmail() {
  return this.email;
  }
  getRole() {
    return "Employee";
  }

}

module.exports = Employee;

// if (!input) {
//   throw new Error('no grade provided');
// }
// let response;
// // Return a letter grade if a number grade was passed
// // Ex. 95 => 'A'