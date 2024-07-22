#!/bin/node
const { Person } = require("./methods");

test("Person class correctly sets name, age, and hometown", () => {
  const vicky = new Person("Victoria", 25, "Liverpool");
  expect(vicky.name).toEqual("Victoria");
  expect(vicky.age).toEqual(25);
  expect(vicky.hometown).toEqual("Liverpool");
});

test("Person class contains a bio method", () => {
  const vicky = new Person("Victoria", 25, "Liverpool");
  expect(typeof vicky.bio).toEqual("function");
});

test("bio method returns correct string", () => {
  const vicky = new Person("Victoria", 25, "Liverpool");
  const bobby = new Person("Bobby", 32, "New York");
  expect(vicky.bio()).toEqual("Victoria is 25 and from Liverpool");
  expect(bobby.bio()).toEqual("Bobby is 32 and from New York");
});
