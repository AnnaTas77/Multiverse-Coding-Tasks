const { Shape, Circle, Character, Warrior} = require("./inheritance-simple");

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

//WARRIOR and CHARACTER

describe("Warrior", () => {
  test("creates instanceof Warrior and Character", () => {
    const zelda = new Warrior(100, 3, 12, "sword");
    expect(zelda instanceof Character).toEqual(true);
    expect(zelda instanceof Warrior).toEqual(true);
  });

  test("class correctly sets properties", () => {
    const zelda = new Warrior(100, 3, 12, "sword");
    expect(zelda.health).toEqual(100);
    expect(zelda.speed).toEqual(3);
    expect(zelda.attackPower).toEqual(12);
    expect(zelda.weapon).toEqual("sword");
  });

  test("has move method", () => {
    const zelda = new Warrior(100, 3, 12, "sword");
    expect(zelda.move()).toEqual("The character moves at a speed of 3");
  });

  test("has useWeapon method", () => {
    const zelda = new Warrior(100, 3, 12, "sword");
    expect(zelda.useWeapon()).toEqual("The warrior attacks with a sword");
  });
});
