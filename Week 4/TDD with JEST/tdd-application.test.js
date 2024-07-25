const { addsTwo, Person, Lion, sum } = require("./tdd-application");

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

describe("class Lion", () => {
  const lion1 = new Lion("Whiskers", 15, 12345);
  test("should name has been set to the correct value", () => {
    expect(lion1.name).toBe("Whiskers");
  });

  test("should age has been set to the correct value", () => {
    expect(lion1.age).toBe(15);
  });

  test("the sound() method returns the expected string", () => {
    expect(lion1.sound()).toBe("Roar!");
  });

  test("the getID() returns the expected ID", () => {
    expect(lion1.getID()).toBe(12345);
  });

  test("setID(id) updates the ID to the correct value", () => {
    lion1.setID(98765);
    expect(lion1.getID()).toBe(98765);
  });
});

describe("sum", () => {
  it("should return the sum of two numbers", () => {
    // Write your code here
    expect(sum(1, 2)).toBe(3);
  });

  it("should throw an error if one or both arguments are not numbers", () => {
    // Write your code here
    expect(() => {
      sum(1, "A");
    }).toThrow();
  });

  it("should correctly handle negative numbers", () => {
    // Write your code here
    expect(sum(-1, -23)).toBe(-24);
  });

  it("should correctly handle large numbers", () => {
    // Write your code here
    expect(sum(100_000, 2_000_000)).toBe(2_100_000);
  });
});
