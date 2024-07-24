#!/bin/node
const Student = require("./student.js");

describe("Student", () => {
  test("Setter Method for Name Works", () => {
    const person1 = new Student("Alex", "def456");
    person1.setName("John");
    expect(person1.getName()).toEqual("John");
  });

  test("Can set a grade for a student", () => {
    const person1 = new Student();
    person1.setGrade(90);
    expect(person1.getGrade()).toEqual(90);
  });

  test("Get the Grade of Student", () => {
    const person1 = new Student();
    person1.setGrade(90);
    expect(person1.getGrade()).toEqual(90);
  });

  test("Can get student name using Getter Method", () => {
    const person1 = new Student();
    person1.setName("Pheolix");
    expect(person1.getName()).toEqual("Pheolix");
  });
});
