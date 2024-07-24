class Employee {
  #name;
  #salary;

  constructor(name, salary) {
    this.#name = name;
    this.#salary = salary;
  }

  getName() {
    return this.#name;
  }

  getSalary() {
    return this.#salary;
  }

  raiseSalary(byPercent) {
    if (byPercent <= 0) {
      throw new Error("Percentage must be positive.");
    }

    const raise = (this.#salary * byPercent) / 100;
    this.#salary += raise;
  }
}

class Manager extends Employee {
  #bonus;

  constructor(name, salary, bonus = 0) {
    super(name, salary);
    this.#bonus = bonus;
  }

  // Overrides the getSalary() method from the base class.
  // SUPER --> always used as a prefix to access a getter method in the parent class
  // super.getSalary() --> calls the '.getSalary()' method of the parent class
  getSalary() {
    return super.getSalary() + this.#bonus;
  }

  getBonus() {
    return this.#bonus;
  }

  setBonus(bonus) {
    if (bonus <= 0) {
      throw new Error("Bonus must be positive.");
    }

    this.bonus = bonus;
  }
}

const myManager = new Manager("Sam", 80_000, 10_000);

console.log(myManager.getBonus())
