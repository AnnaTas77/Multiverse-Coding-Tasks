const { Shape, Circle } = require("./inheritance-simple");

test("Circle creates an instance of the Circle class", () => {
  const circ = new Circle("blue", 5);
  expect(circ instanceof Circle).toEqual(true);
});

test("Circle class has color and radius properties", () => {
  const circ = new Circle("blue", 5);
  expect(circ.color).toEqual("blue");
  expect(circ.radius).toEqual(5);
});

test("Circle class has draw method", () => {
  const circ = new Circle("blue", 5);
  expect(circ.draw()).toEqual("Drawing a blue shape.");
});

test("Circle class has calculateArea method", () => {
  const circ = new Circle("blue", 5);
  expect(circ.calculateArea()).toBeCloseTo(78.53981633974483, 1);
});
