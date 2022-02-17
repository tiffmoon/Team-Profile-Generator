const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern')

describe("Intern class", () => {
  describe("Using the get methods", () => {
    const intern = new Intern("Gary", 23, "Gary@me.com", "The Cool School");
    it("should get employee role using getRole()", () => {
      const test = intern.getRole();
      expect(test).toEqual("Intern");
    });it("should get intern name using getName()", () => {
      const test = intern.getName();
      expect(test).toEqual("Gary");
    });
    it("should get intern id using getID()", () => {
      const test = intern.getID();
      expect(test).toEqual(23);
    });
    it("should get intern email using getEmail()", () => {
      const test = intern.getEmail();
      expect(test).toEqual("Gary@me.com");
    });
    it("should get intern school using getSchool()", () => {
      const test = intern.getSchool();
      expect(test).toEqual("The Cool School");
    });
  });
});