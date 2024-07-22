class Person {
  // Write your code here
  constructor(name, age, hometown) {
    (this.name = name), (this.age = age), (this.hometown = hometown);
  }

  bio() {
    return `${this.name} is ${this.age} and from ${this.hometown}`;
  }
}
// DO NOT EDIT CODE BELOW
module.exports = {
  Person,
};
