// Write your code here
class Triangle {
  constructor(base, height, corners = 3) {
    (this.base = base), (this.height = height), (this.corners = corners);
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

class Book {
  constructor(title, author, ratings) {
    (this.title = title), (this.author = author), (this.ratings = []);
  }

  addRating(rating) {
    this.ratings.push(rating);
  }

  averageRating() {
    let avarage = 0;
    this.ratings.forEach((item) => {
      avarage += item;
    });
    return avarage / this.ratings.length;
  }
}

// DO NOT EDIT CODE BELOW
module.exports = { Triangle, Account, Book };
