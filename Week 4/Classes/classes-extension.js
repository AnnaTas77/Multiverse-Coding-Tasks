class Person {
  // Write your code here
  constructor(name, age, favColor) {
    (this.name = name), (this.age = age), (this.favColor = favColor);
  }

  sayHello() {
    return `Hello my name is ${this.name}. I am ${this.age} years old and my favorite color is ${this.favColor}.`;
  }
}

class Song {
  // Write your code here

  constructor(songTitle, artist, length, genre) {
    if (songTitle) {
      (this.songTitle = songTitle),
        (this.artist = artist),
        (this.length = length),
        (this.genre = genre);
    } else {
      throw new Error("Please enter a title");
    }
  }

  sing() {
    return `${this.songTitle} by ${this.artist}`;
  }
}

// const song1 = new Song("", "Rihanna", "3:44", "R&B")

// console.log(song1.sing())

///////////////// TEAM and PLAYERS

class Player {
  // Write your code here
  constructor(firstName, secondName) {
    (this.firstName = firstName), (this.secondName = secondName);
  }
  fullName() {
    return `${this.firstName} ${this.secondName}`;
  }
}

class Team {
  // Write your code here
  constructor(name) {
    this.name = name;
    this.players = [];
  }

  addPlayer(player) {
    this.players.push(player);
  }

  playerCount() {
    return this.players.length;
  }
}

// const p1 = new Player("Ada", "Lovelace");
// const p2 = new Player("Charles", "Babbage");
// const team = new Team("The Ordinators");
// console.log("BEFORE: ", team);
// team.addPlayer(p2);
// team.addPlayer(p1);
// console.log("AFTER: ", team);

///////////// ITEM and BASKET

class Item {
  // Write your code here
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Basket {
  // Write your code here
  constructor() {
    this.items = [];
  }

  addItem(item) {
    if (item instanceof Item) {
      this.items.push(item);
    } else {
      throw new Error("Only items can be added");
    }
  }

  total() {
    let sum = 0;

    this.items.forEach((item) => {
      sum += item.price;
    });

    return sum;
  }

  remove(i) {
    this.items.splice(i, 1);
  }
}

const pens = new Item("pens", 3);
const toothbrush = new Item("toothbrush", 2);
const cart = new Basket();
console.log("Before adding:", cart);
cart.addItem(pens);
cart.addItem(toothbrush);
console.log("After adding:", cart);
cart.remove(0);
console.log("After removing the element at index 0:", cart);

// DO NOT EDIT BELOW
module.exports = { Person, Song, Team, Player, Item, Basket };
