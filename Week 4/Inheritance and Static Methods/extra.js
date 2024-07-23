class Person {
  static species = "Homo sapiens";
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  static species = "Homo academicus";
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
}

const alice = new Person("Alice", 30);
const bob = new Student("Bob", 20, "Computer Science");

console.log(alice.species);
console.log(bob.species);

class Calculator {
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

class ScientificCalculator extends Calculator {
  static multiply(a, b) {
    return a * b;
  }
}

console.log(Calculator.add(2, 3));
console.log(Calculator.subtract(5, 2));
console.log(ScientificCalculator.multiply(2, 3));
