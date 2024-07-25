const addsTwo = (num1, num2) => num1 + num2;

class Person {
  // Write your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name}.`;
  }

  tellAge() {
    return `I am ${this.age} years old.`;
  }

  birthday() {
    this.age += 1;
  }
}

class Lion {
  #id;
  constructor(name, age, id) {
    this.name = name;
    this.age = age;
    this.#id = id;
  }

  sound() {
    return "Roar!";
  }

  getID() {
    return this.#id;
  }

  setID(id) {
    this.#id = id;
  }
}

function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid arguments");
  }
  return a + b;
}

module.exports = { addsTwo, Person, Lion, sum };
