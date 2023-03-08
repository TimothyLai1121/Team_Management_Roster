const Employee = require("../lib/employee");

describe("Employee", () => {
  it("should have the correct properties", () => {
    const employee = new Employee("Tien Ton", 1, "timothylai1121@gmail.com");
    expect(employee.name).toBe("Tien Ton");
    expect(employee.id).toBe(1);
    expect(employee.email).toBe("timothylai1121@gmail.com");
  });
});
