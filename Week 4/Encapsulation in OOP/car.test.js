const Car = require("./car.js");

describe("Car", () => {
  test("Can Set Color with Setter", () => {
    const car1 = new Car();
    car1.setBrand("Toyota");
    expect(car1.getBrand()).toEqual("Toyota");
  });

  test("Setter Method for Color Works ", () => {
    const car1 = new Car();
    car1.setColor("White");
    expect(car1.getColor()).toEqual("White");
  });

  test("Can Get Brand with Getter", () => {
    const car1 = new Car();
    car1.setBrand("Toyota");
    expect(car1.getBrand()).toEqual("Toyota");
  });

  test("Can Get Color with Setter", () => {
    const car1 = new Car();
    car1.setColor("Gray");
    expect(car1.getColor()).toEqual("Gray");
  });

  test("Can Set Color with Setter", () => {
    const car1 = new Car();
    car1.setColor("White");
    expect(() => car1.setColor()).toThrow("You must include a Color");
  });

  test("Can Set Color with Setter", () => {
    const car1 = new Car();
    expect(() => car1.setBrand()).toThrow("You must include a Brand");
  });
});
