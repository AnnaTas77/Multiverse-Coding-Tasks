const {sumNums} = require("./recursion-workshop");

it("Returns a Function", () => {
  expect(typeof sumNums).toEqual("function");
});

it("Returns a Number", () => {
  expect(typeof sumNums(10)).toEqual("number");
});

test("Passes Example Cases", () => {
  expect(sumNums(10)).toEqual(55);
  expect(sumNums(15)).toEqual(120);
});

it("Passes Base Case", () => {
  expect(sumNums(1)).toEqual(1);
});

it("Passes Recursive Case", () => {
  expect(sumNums(5)).toEqual(15);
  expect(sumNums(50)).toEqual(1275);
  expect(sumNums(37)).toEqual(703);
});
