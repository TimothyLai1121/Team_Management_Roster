const Intern = require("../lib/intern");

describe("Intern", () => {
  it("should have the correct properties", () => {
    const intern = new Intern("Tien Ton", 1, "timothylai1121@gmail.com", 123);
    expect(intern.name).toBe("Tien Ton");
    expect(intern.id).toBe(1);
    expect(intern.email).toBe("timothylai1121@gmail.com");
    expect(intern.officeNumber).toBe(123);
  });
});
