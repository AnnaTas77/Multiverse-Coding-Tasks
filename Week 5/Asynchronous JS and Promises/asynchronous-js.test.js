const { myStack } = require("./asynchronous-js");

test("myStack has 6 items", () => {
  expect(myStack.length).toEqual(6);
});

test("myStack has 6 items", () => {
  expect(myStack).toEqual([
    "Zebras",
    "Lions",
    "Pandas",
    "Pandas",
    "Lions",
    "Zebras",
  ]);
});
