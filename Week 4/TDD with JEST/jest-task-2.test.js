const doubleValues = require("./jest-task-2");

describe("doubleValues function", () => {
  it("tests that doubleValues returns an array of the initial values doubled", () => {
    expect(doubleValues([1, 2])).toEqual([2, 4]);
  });

  it("throws an error when the array contains a value that is not a number", () => {
    expect(() => {
      doubleValues(["Anna", 2]);
    }).toThrow("Array can only contain numbers");
  });
});
