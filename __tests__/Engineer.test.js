const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer')

describe("Engineer class", () => {
  describe("Using the get methods", () => {
    const engineer = new Engineer("Tiff", 98, "tiff@me.com", "@tiff");
    it("should get employee role using getRole()", () => {
      const test = engineer.getRole();
      expect(test).toEqual("Engineer");
    });
    it("should get engineer name using getName()", () => {
      const test = engineer.getName();
      expect(test).toEqual("Tiff");
    });
    it("should get engineer id using getID()", () => {
      const test = engineer.getID();
      expect(test).toEqual(98);
    });
    it("should get engineer email using getEmail()", () => {
      const test = engineer.getEmail();
      expect(test).toEqual("tiff@me.com");
    });
    it("should get engineer githib using getGithub()", () => {
      const test = engineer.getGithub();
      expect(test).toEqual("@tiff");
    });
  });
});