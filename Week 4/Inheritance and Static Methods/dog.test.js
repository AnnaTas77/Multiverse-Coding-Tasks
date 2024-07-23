#!/bin/node
const { Dog, Mammal } = require("./dog.js");

test("Dog is a Type Of Mammal", () => {
  expect(Mammal.isPrototypeOf(Dog)).toBe(true);
});

test("Dog has a Name", () => {
  const dog1 = new Dog("Rocky", "Sam");
  expect(dog1.name).toEqual("Rocky");
});

test("Dog Inherits Eat Method from Mammal", () => {
  const dog1 = new Dog("Cobra", "John");
  expect(dog1.eats()).toEqual("Cobra eats Food");
});

test("Dog Initialized with Owner", () => {
  const dog1 = new Dog("Baxter", "Bryan");
  expect(dog1.hasOwner()).toEqual(true);
});
