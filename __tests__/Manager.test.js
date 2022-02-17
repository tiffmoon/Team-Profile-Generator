const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

describe("Manager class", () => {
  describe("Using the get methods", () => {
    const manager = new Manager("Sheila", 45, "Sheila@me.com", 5563);
    it("should get employee role using getRole()", () => {
      const test = manager.getRole();
      expect(test).toEqual("Manager");
    });it("should get manager name using getName()", () => {
      const test = manager.getName();
      expect(test).toEqual("Sheila");
    });
    it("should get manager id using getID()", () => {
      const test = manager.getID();
      expect(test).toEqual(45);
    });
    it("should get manager email using getEmail()", () => {
      const test = manager.getEmail();
      expect(test).toEqual("Sheila@me.com");
    });
    it("should get manager office number using getOfficeNumber()", () => {
      const test = manager.getOfficeNumber();
      expect(test).toEqual(5563);
    });
  });
});