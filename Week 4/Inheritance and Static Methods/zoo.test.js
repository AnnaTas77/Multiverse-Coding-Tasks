const Zoo = require("./zoo.js");

test("Zoo has a Maximum of 100 Animals", () => {
  expect(Zoo.MAX_NUMBER_OF_ANIMALS).toEqual(100);
});

test("Zoo has a Max of 10 Rooms", () => {
  expect(Zoo.NUMBER_OF_ROOMS).toEqual(10);
});

test("Static Method Works", () => {
  expect(Zoo.listOfAnimals()).toEqual([
    "Penguins",
    "Zebras",
    "Monkeys",
    "Giraffe",
    "Hippo",
  ]);
});
