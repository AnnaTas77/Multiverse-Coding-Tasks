const { Person, Student } = require("./person.js");

test("Student is a Person", () => {
  expect(Person.isPrototypeOf(Student)).toEqual(true);
});

test("Person throws error if no name", () => {
  expect(() => new Person()).toThrow("Please include a name");
});

test("Student throws error if no name", () => {
  expect(() => new Student()).toThrow("Please include a name");
});

test("Student throws error if no school", () => {
  expect(() => new Student("Jack")).toThrow("Please indicate your bootcamp");
});
