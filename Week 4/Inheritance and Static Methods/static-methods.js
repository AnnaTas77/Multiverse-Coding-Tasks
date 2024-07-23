class Bag {
  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }
  // Add your static property and method here
  static company = "Boolean Airways";

  static printAirline() {
    return `Welcome to ${this.company}!`;
  }
}

console.log(Bag.company);
console.log(Bag.printAirline());

// DO NOT EDIT CODE BELOW
module.exports = {
  Bag,
};
