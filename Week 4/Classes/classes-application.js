// Write your code here
class Triangle {
  constructor(base, height, corners) {
    (this.base = base), (this.height = height), (this.corners = 3);
  }

  taller(dh) {
    this.height += dh;
  }
  area() {
    const area = 0.5 * this.base * this.height;
    return area;
  }
}

class Account {
  constructor(accountId, balance) {
    (this.accountId = accountId), (this.balance = balance); //USD
  }
  deposit(amount, currency) {
    if (currency === "GBP") {
      amount *= 1.2;
      return (this.balance += amount);
    } else {
      return (this.balance += amount);
    }
  }
  getBalance(currency) {
    if (currency === "GBP") {
      this.balance /= 1.2;
      return `£${this.balance}`;
    } else {
      return `$${this.balance}`;
    }
  }
}

const acc = new Account("xyz", 10);
console.log(acc.deposit(5, "GBP"));


// DO NOT EDIT CODE BELOW
module.exports = { Triangle, Account };
