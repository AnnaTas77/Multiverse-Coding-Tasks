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

  birthday(){
    this.age+=1
  }
}

module.exports = { addsTwo, Person };
