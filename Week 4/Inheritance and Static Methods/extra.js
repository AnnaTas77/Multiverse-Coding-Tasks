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
