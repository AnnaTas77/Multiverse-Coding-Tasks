const {
  positiveDifference,
  sumAll,
  factorial,
  backwardString,
  countToTen,
} = require("./recursion");

// sumAll

test("sumAll returns a number", () => {
  expect(typeof sumAll(5)).toEqual("number");
});

test("sumAll returns correct values", () => {
  expect(sumAll(5)).toEqual(15);
  expect(sumAll(3)).toEqual(6);
  expect(sumAll(10)).toEqual(55);
});

// Factorial

test("factorial returns a number", () => {
  expect(typeof factorial(5)).toEqual("number");
});

test("factorial returns correct values", () => {
  expect(factorial(3)).toEqual(6);
  expect(factorial(5)).toEqual(120);
  expect(factorial(10)).toEqual(3628800);
});

// Positive Difference

test("positiveDifference returns a number", () => {
  expect(typeof positiveDifference(10, 3)).toEqual("number");
});

test("positiveDifference returns a positive number - Example #1", () => {
  expect(positiveDifference(10, 3)).toEqual(7);
});

test("positiveDifference returns a positive number - Example #2", () => {
  expect(positiveDifference(2, 6)).toEqual(4);
});

// Backward String

it("is a function", () => {
  expect(typeof backwardString).toEqual("function");
});

it("returns undefined", () => {
  let returnedValue = backwardString("happy");
  expect(returnedValue).toEqual(undefined);
});

it("logs every character in the given string, from back to front", () => {
  // we'll mock and spy on console.log to make sure it's called correctly
  console.log = jest.fn();

  backwardString("fun");

  // check that console.log was first called with the string 'n'
  expect(console.log.mock.calls[0][0]).toEqual("n");
  // expect(console.log.calls.argsFor(0)).toEqual(['n']);

  // check that console.log was then called with the string 'u'
  expect(console.log.mock.calls[1][0]).toEqual("u");
  // expect(console.log.calls.argsFor(1)).toEqual(['u']);

  // check that console.log was then called with the string 'f'
  expect(console.log.mock.calls[2][0]).toEqual("f");
  // expect(console.log.calls.argsFor(2)).toEqual(['f']);

  // check that console.log was called exactly three times
  expect(console.log.mock.calls.length).toEqual(3);
});

// countToTen Coding Challenge

it("is a function", () => {
  expect(typeof countToTen).toEqual("function");
});

it("returns undefined", () => {
  let returnedValue = countToTen(10);
  expect(returnedValue).toEqual(undefined);
});

it("logs every number between the number passed to it and 10, including 10", () => {
  // we'll mock and spy on console.log to make sure it's called correctly
  console.log = jest.fn();

  countToTen(8);

  // check that console.log was first called with the number 8
  expect(console.log.mock.calls[0][0]).toEqual(8);

  // check that console.log was then called with the number 9
  expect(console.log.mock.calls[1][0]).toEqual(9);

  // check that console.log was then called with the number 10
  expect(console.log.mock.calls[2][0]).toEqual(10);

  // check that console.log was called exactly three times
  expect(console.log.mock.calls.length).toEqual(3);
});
