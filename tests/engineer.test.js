const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  it("should have the correct properties", () => {
    const engineer = new Engineer("Tien Ton", 1, "timothylai1121@gmail.com", 123);
    expect(engineer.name).toBe("Tien Ton");
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe("timothylai1121@gmail.com");
    expect(engineer.officeNumber).toBe(123);
  });
});
