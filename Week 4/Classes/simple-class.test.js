const { Bag } = require("./simple-class");

test("Bag is a class", () => {
  let bobby = new Bag("Bobby", 50, 3);
  expect(bobby instanceof Bag).toEqual(true);
});

test("Bag can create a Bag object", () => {
  const bag1 = new Bag("bucky", 22, 123);
  expect(typeof bag1).toEqual("object");
});

test("Bag correctly sets properties of name, weight, and id", () => {
  const bag1 = new Bag("bucky", 22, 123);
  expect(bag1.name).toEqual("bucky");
  expect(bag1.weight).toEqual(22);
  expect(bag1.id).toEqual(123);
});
