const {
  Person,
  Song,
  Team,
  Player,
  Item,
  Basket,
} = require("./classes-extension");

describe("Person class", () => {
  test("sayHello method", () => {
    const person = new Person("Kari", 35, "purple");
    expect(person.sayHello()).toBe(
      "Hello my name is Kari. I am 35 years old and my favorite color is purple."
    );
  });

  test("person has a name", () => {
    const person1 = new Person("Steven", 33, "blue");
    expect(person1.name).toBe("Steven");
  });
  test("person has an age", () => {
    const person2 = new Person("Steven", 33, "blue");
    expect(person2.age).toBe(33);
  });
  test("person has an color", () => {
    const person3 = new Person("Steven", 33, "blue");
    expect(person3.favColor).toBe("blue");
  });
});

// SONG

describe("Song class", () => {
  //song has title
  test("sing method returns correct string", () => {
    const song = new Song("Virgos Groove", "Beyonce", "6:08", "R&B");
    expect(song.sing()).toBe("Virgos Groove by Beyonce");
  });
  //song has title
  test("Song has a title", () => {
    const song = new Song("Virgos Groove", "Beyonce", "6:08", "R&B");
    expect(song.songTitle).toBe("Virgos Groove");
  });
  //if song has no title, return error
  test("Song has not title returns an error", () => {
    expect(() => new Song("", "Rihanna", "3:44", "R&B")).toThrowError(
      "Please enter a title"
    );
  });
});

/// TEAM and PLAYER
describe("Team and Player classes", () => {
  test("Player class creates player with firstName and secondName", () => {
    const p1 = new Player("Ada", "Lovelace");
    expect(p1.firstName).toEqual("Ada");
    expect(p1.secondName).toEqual("Lovelace");
    const p2 = new Player("Charles", "Babbage");
    expect(p2.firstName).toEqual("Charles");
    expect(p2.secondName).toEqual("Babbage");
  });
  test("Team class creates team with name", () => {
    const team = new Team("The Ordinators");
    expect(team.name).toEqual("The Ordinators");
    const baseball = new Team("Yankees");
    expect(baseball.name).toEqual("Yankees");
  });
  test("Team has addPlayer that adds players to an array", () => {
    const p1 = new Player("Ada", "Lovelace");
    const p2 = new Player("Charles", "Babbage");
    const team = new Team("The Ordinators");
    team.addPlayer(p2);
    team.addPlayer(p1);
    expect(team.players[0].firstName).toEqual("Charles");
  });
  test("Team has addPlayer that adds players to an array", () => {
    const p1 = new Player("Ada", "Lovelace");
    const p2 = new Player("Charles", "Babbage");
    const team = new Team("The Ordinators");
    team.addPlayer(p2);
    team.addPlayer(p1);
    expect(team.playerCount()).toEqual(2);
  });
});

///////////// ITEM and BASKET

describe("Item and Basket classes", () => {
  test("Item class creates an item", () => {
    const pens = new Item("pens", 3);
    expect(pens instanceof Item).toEqual(true);
  });

  test("Basket class creates a basket", () => {
    const cart = new Basket();
    expect(cart instanceof Basket).toEqual(true);
  });

  test("Basket can add items using addItem method", () => {
    const pens = new Item("pens", 3);
    const cart = new Basket();
    cart.addItem(pens);
    expect(cart.items.length).toEqual(1);
  });

  test("Basket throws error when non-item is added", () => {
    const cart = new Basket();
    expect(cart.addItem).toThrow("Only items can be added");
  });

  test("total method returns the total", () => {
    const pens = new Item("pens", 3);
    const toothbrush = new Item("toothbrush", 2);
    const cart = new Basket();
    cart.addItem(pens);
    cart.addItem(toothbrush);
    expect(cart.total()).toEqual(5);
  });

  test("total method returns the total", () => {
    const pens = new Item("pens", 3);
    const toothbrush = new Item("toothbrush", 2);
    const cart = new Basket();
    cart.addItem(pens);
    cart.addItem(toothbrush);
    cart.remove(1);
    expect(cart.items.length).toEqual(1);
  });
});
