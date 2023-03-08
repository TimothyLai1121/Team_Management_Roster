const Manager = require("../lib/manager");
// requiring from ../lib/manager.js //
describe("Manager", () => {
  // line starts a new test suite for thje manager class, the string is the name of the test suite //
  it("should have the correct properties", () => {
    const manager = new Manager("Tien Ton", 1, "timothylai1121@gmail.com", 123);
    expect(manager.name).toBe("Tien Ton");
    expect(manager.id).toBe(1);
    expect(manager.email).toBe("timothylai1121@gmail.com");
    expect(manager.officeNumber).toBe(123);
  });
});
