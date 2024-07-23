/** Create a base class called Person. This class will initialize objects with a name property that is passed in as an argument to the constructor.
Throw an error “Please include a name” if the user does not pass a name to the class.
Create a child class called Student. This class should receive a name and bootcamp in its constructor. It should pass the name to the super class and set the bootcamp property on the Student class.
If no bootcamp was passed as a second argument to the Student class, throw an error “Please indicate your bootcamp” */

class Person {
  constructor(name) {
    if (!name) {
      throw new Error("Please include a name");
    }
    this.name = name;
  }
}

class Student extends Person {
  constructor(name, bootcamp) {
    super(name);

    if (!bootcamp) {
      throw new Error("Please indicate your bootcamp");
    }
    this.bootcamp = bootcamp;
  }
}

// console.log(new Student())

// console.log(new Person())

// DO NOT EDIT CODE BELOW
module.exports = {
  Person,
  Student,
};
