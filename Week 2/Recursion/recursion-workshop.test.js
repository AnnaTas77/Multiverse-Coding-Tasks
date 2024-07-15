const { sumNums, exponent } = require("./recursion-workshop");

//sumNums

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

// exponent
it("Returns a Function", () => {
  expect(typeof exponent).toEqual("function");
});

test("Returns a Number", () => {
  expect(typeof exponent(2, 4)).toEqual("number");
});

test("test stub", () => {
  expect(exponent(5, 0)).toEqual(1);
  expect(exponent(13, 0)).toEqual(1);
  expect(exponent(100, 0)).toEqual(1);
  expect(exponent(43, 0)).toEqual(1);
});

it("Passes Example Cases", () => {
  expect(exponent(4, 2)).toEqual(16);
  expect(exponent(3, 3)).toEqual(27);
  expect(exponent(2, 8)).toEqual(256);
});

it("Passes Other Test Cases", () => {
  expect(exponent(5, 2)).toEqual(25);
  expect(exponent(12, 2)).toEqual(144);
  expect(exponent(2, 4)).toEqual(16);
  expect(exponent(5, 3)).toEqual(125);
  expect(exponent(100, 3)).toEqual(1000000);
});

//