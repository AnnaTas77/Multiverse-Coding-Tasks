const {
  Student,
  Teacher,
  Car1,
  Car,
  Vehicle,
} = require("./inheritance-application");

describe("Student", () => {
  test("should have access to name property and greet method", () => {
    const student = new Student("Joe Bloggs", "first year");
    expect(student.name).toBe("Joe Bloggs");
    expect(student.greet()).toBe("Hello, my name is Joe Bloggs.");
  });

  test("should have study method", () => {
    const student = new Student("Joe Bloggs", "first year");
    expect(student.study()).toBe(
      "Joe Bloggs is studying for first year exams."
    );
  });
});

describe("Teacher", () => {
  test("should have access to name property and greet method", () => {
    const teacher = new Teacher("Joe Bloggs", "math");
    expect(teacher.name).toBe("Joe Bloggs");
    expect(teacher.greet()).toBe("Hello, my name is Joe Bloggs.");
  });

  test("teacher method check", () => {
    const teacher = new Teacher("Joe Bloggs", "math");
    expect(teacher.teach()).toBe("Joe Bloggs is teaching math.");
  });
});

// CAR

describe("Car1", () => {
  test("should output boolean based on colour", () => {
    const blueCar = new Car1("Ford", "blue");
    const redCar = new Car1("Toyota", "red");
    expect(Car1.compareColor(redCar, blueCar)).toBe(false);
    expect(Car1.compareColor(blueCar, blueCar)).toBe(true);
  });
});

// CAR and VEHICLE and STATIC METHODS
describe("Car and Vehicle relationship", () => {
  test("checks car inheritance", () => {
    const currentYear = new Date().getFullYear();
    const car = new Car("Ford", "Mustang", currentYear - 1, 4);
    expect(car.make).toBe("Ford");
    expect(car.model).toBe("Mustang");
    expect(car.year).toBe(currentYear - 1);
    expect(Car.getAge(car)).toBeLessThanOrEqual(1);
  });

  test("checks Car static method", () => {
    const car = new Car("Ford", "Mustang", 2022, 4);
    const bike = new Vehicle("Ducati", "2600", 2023);
    expect(Car.hasFourDoors(car)).toBe(true);
    expect(Car.hasFourDoors(bike)).toBe(false);
  });
});
