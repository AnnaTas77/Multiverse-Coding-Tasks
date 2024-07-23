const { Bag } = require("./static-methods");

test("Static property of company contains 'Boolean Airways'", () => {
  expect(Bag.company).toEqual("Boolean Airways");
});

test("Static method of printAirline returns 'Welcome to Boolean Airways!'", () => {
  expect(Bag.printAirline()).toEqual("Welcome to Boolean Airways!");
});

test("Static properties and methods are not added to constructor", () => {
  expect(Object.getOwnPropertyNames(new Bag()).length).toEqual(2);
});