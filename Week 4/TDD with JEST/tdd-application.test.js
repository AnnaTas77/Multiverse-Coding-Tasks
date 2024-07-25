const { addsTwo, Person } = require("./tdd-application");

describe("addsTwo function", () => {
  test("adds two numbers together and returns the result", () => {
    expect(addsTwo(2, 2)).toBe(4);
  });
});

describe("class Person", () => {
  const person1 = new Person("Sam", 25);

  test("should be an instance of the Person class", () => {
    expect(person1 instanceof Person).toBe(true);
  });

  test("should have the correct name of the person", () => {
    expect(person1.name).toBe("Sam");
  });

  test("should have the correct age of the person", () => {
    expect(person1.age).toBe(25);
  });

  test("greet() should return a string structured like this: 'Hello, my name is <name>.'", () => {
    expect(person1.greet()).toBe("Hello, my name is Sam.");
  });

  test("tellAge() should return a string structured like this: 'I am 25 years old.'", () => {
    expect(person1.tellAge()).toBe("I am 25 years old.");
  });

  it("birthday() should increment the age property.", () => {
    person1.birthday();
    expect(person1.age).toBe(26);
  });
});
