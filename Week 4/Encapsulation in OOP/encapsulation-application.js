// Write your code here

class Person {
  #age;
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  getAge() {
    return this.#age;
  }

  setAge(newAge) {
    this.#age = newAge;
  }
}

/// Bank Account

class BankAccount {
  // Write your code here
  #owner;
  #balance;

  constructor(owner) {
    this.#owner = owner;
    this.#balance = 0;
  }

  getOwner() {
    return this.#owner;
  }

  getBalance() {
    let balanceToStr = String(this.#balance.toFixed(2));
    let strArray = balanceToStr.split(".");
    return `£${strArray[0]}.${strArray[1]}`;
  }

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (this.#balance <= 0 || this.#balance < amount) {
      throw new Error("Insufficient funds");
    }

    this.#balance -= amount;
  }
}

const account = new BankAccount("Joe Bloggs");
account.deposit(100);
console.log(account.getBalance());
account.withdraw(10);
console.log(account.getBalance());


// DO NOT EDIT CODE BELOW
module.exports = {Person, BankAccount};
