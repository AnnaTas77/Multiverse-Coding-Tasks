// Write your code here

class Student {
  #name;
  #grade;

  constructor(name, grade) {
    this.#name = name;
    this.#grade = grade;
  }

  setName(newName) {
    this.#name = newName;
  }

  setGrade(newGrade) {
    this.#grade = newGrade;
  }

  getName() {
    return this.#name;
  }

  getGrade() {
    return this.#grade;
  }
}

const person1 = new Student();
person1.setGrade(90);
console.log(person1.getGrade());

person1.setName("Pheolix");
console.log(person1.getName());

// DO NOT EDIT CODE BELOW
module.exports = Student;
