// GETTERS and SETTERS

class Person {
  #age; // private field
  constructor(age) {
    this.#age = age;
  }

  getAge() {
    // getter method
    return this.#age;
  }
  setAge(age) {
    // setter method
    this.#age = age;
  }
}
const person = new Person(30);
console.log(person.getAge()); // Returns 30
person.setAge(31); // Sets age to 31
console.log(person.getAge()); // Returns 31

//PASSENGER CLASS

class Passenger {
  // Write your code here
  #name;
  #passportNum;
  constructor(name, passportNum, seatNumber) {
    // Write your code here
    this.#name = name;
    this.#passportNum = passportNum;
    this.seatNumber = seatNumber;
  }
  // DO NOT EDIT CODE BELOW
  getName() {
    return this.#name;
  }
  getPassportNum() {
    return this.#passportNum;
  }
  // DO NOT EDIT CODE ABOVE
}

const p1 = new Passenger("John", "ABC123", "23E");
console.log(p1);

// BANK ACCOUNT

class BankAccount {
  #balance;
  constructor(initialBalance) {
    this.#balance = initialBalance;
  }
  // DEFINE GETTER AND SETTER METHODS HERE
  // Write your code here
  getBalance() {
    return this.#balance;
  }

  setBalance(newBalance) {
    this.#balance = newBalance;
  }
}

const account = new BankAccount(10000);
console.log(account.getBalance());
account.setBalance(20000);
console.log(account.getBalance());

// DO NOT EDIT CODE BELOW
module.exports = {
  Passenger,
  BankAccount,
};
