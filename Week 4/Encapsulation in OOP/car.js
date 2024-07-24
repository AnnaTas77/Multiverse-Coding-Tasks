class Car {
  #brand;
  #color;

  constructor(brand, color) {
    this.#brand = brand;
    this.#color = color;
  }

  setColor(newColor) {
    if (!newColor) {
      throw new Error("You must include a Color");
    }
    this.#color = newColor;
  }

  setBrand(newBrand) {
    if (!newBrand) {
      throw new Error("You must include a Brand");
    }
    this.#brand = newBrand;
  }

  getColor() {
    return this.#color;
  }

  getBrand() {
    return this.#brand;
  }
}

const car1 = new Car();
car1.setBrand("Toyota");
console.log(car1.getBrand());

car1.setColor("White");
console.log(car1.getColor());
//car1.setColor()  //throws an error

// DO NOT EDIT CODE BELOW
module.exports = Car;
