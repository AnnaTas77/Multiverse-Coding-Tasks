const Automobile = require("./automobile.js");

test("Can Add Miles", () => {
  let car1 = new Automobile();
  car1.driveMiles(10);
  expect(car1.miles).toEqual(10);
  car1.driveMiles(20);
  expect(car1.miles).toEqual(30);
});

test("Is a Correct Type of Automobile", () => {
  expect(Automobile.typeIsValid("car")).toEqual(true);
  expect(Automobile.typeIsValid("truck")).toEqual(true);
  expect(Automobile.typeIsValid("motorcycle")).toEqual(true);
});

test("Checks for Incorrect Type of Automobile", () => {
  expect(Automobile.typeIsValid("sports car")).toEqual(false);
  expect(Automobile.typeIsValid("vehicle")).toEqual(false);
  expect(Automobile.typeIsValid("gocart")).toEqual(false);
});

test("Works with Passed in Type", () => {
  let car1 = new Automobile("car");
  expect(car1.type).toEqual("car");
});
