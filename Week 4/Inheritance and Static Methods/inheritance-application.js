class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, my name is ${this.name}.`;
  }
}
// Write your code here

class Student extends Person {
  constructor(name, level) {
    super(name);
    this.level = level;
  }
  study() {
    return `${this.name} is studying for ${this.level} exams.`;
  }
}

class Teacher extends Person {
  constructor(name, department) {
    super(name);
    this.department = department;
  }

  teach() {
    return `${this.name} is teaching ${this.department}.`;
  }
}

const student = new Student("Alan Turing", "first year");
const greeting = student.greet();
console.log(greeting);
// logs "Hello, my name is Alan Turing."
const studying = student.study();
console.log(studying);
// logs "Alan Turing is studying for first year exams."

class Car1 {
  constructor(model, color = "black") {
    this.model = model;
    this.color = color;
  }

  drive() {
    return "Vroom!";
  }

  // Write your code here

  static compareColor(first, second) {
    return first.color === second.color;
  }
}

const blueCar = new Car1("Ford", "blue");
const redCar = new Car1("Toyota", "red");
const myCar = new Car1("Ford", "blue");

console.log(Car1.compareColor(redCar, blueCar));
console.log(Car1.compareColor(myCar, blueCar));


// CAR and VEHICLE and STATIC METHODS


class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    static getAge(vehicle) {
      const currentYear = new Date().getFullYear();
      return currentYear - vehicle.year;
    }
  }
  
  
  class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
      super(make, model, year);
      this.numDoors = numDoors;
    }
    static hasFourDoors(vehicle) {
      return vehicle.numDoors === 4;
    }
  }
  
  const car = new Car("Ford", "Mustang", 2022, 4);
  const bike = new Vehicle("Ducati", "2600", 2023);
  console.log(Car.hasFourDoors(car));
  console.log(Car.hasFourDoors(bike));
  

// DO NOT EDIT CODE BELOW
module.exports = {
  Person,
  Student,
  Teacher,
  Car1,
  Car,
  Vehicle
};
