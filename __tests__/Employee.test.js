const Employee = require('../lib/Employee');

describe("Employee class", () => {
  describe("Using the get methods", () => {
    const employee = new Employee("Missy", 22, "Missy@me.com", 5563);
    it("should get employee role using getRole()", () => {
      const test = employee.getRole();
      expect(test).toEqual("Employee");
    });
    it("should get employee name using getName()", () => {
      const test = employee.getName();
      expect(test).toEqual("Missy");
    });
    it("should get employee id using getID()", () => {
      const test = employee.getID();
      expect(test).toEqual(22);
    });
    it("should get employee email using getEmail()", () => {
      const test = employee.getEmail();
      expect(test).toEqual("Missy@me.com");
    });
  });
});