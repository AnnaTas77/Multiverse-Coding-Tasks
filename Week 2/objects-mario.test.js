const mario = require("./objects-mario");

describe("mario", () => {
  it("has its original properties", () => {
    expect(mario).toMatchObject({
      position: [0, 0],
      health: 100,
      armor: 100,
    });
  });
});

describe("mario.move()", () => {
  it("is a function", () => {
    expect(typeof mario.move).toBe("function");
  });

  it("has one parameter", () => {
    expect(mario.move).toHaveLength(1);
  });

  it("uses the `this` keyword", () => {
    const luigi = { position: [2, 4] };

    // Calling the method on a separate object tests that the `this` keyword
    // was used.
    mario.move.call(luigi, "up"); // [2, 5]
    mario.move.call(luigi, "up"); // [2, 6]
    mario.move.call(luigi, "right"); // [3, 6]
    mario.move.call(luigi, "right"); // [4, 6]
    mario.move.call(luigi, "down"); // [4, 5]
    mario.move.call(luigi, "left"); // [3, 5]

    expect(luigi.position).toEqual([3, 5]);
  });

  it("returns a copy of the object's position", () => {
    // Creating a separate object ensures that we don't mutate the original
    // object when we call the `.move()` method.
    const luigi = { position: [2, 4] };

    let newPosition = mario.move.call(luigi, "down"); // [2, 3]
    newPosition = mario.move.call(luigi, "down"); // [2, 2]
    newPosition = mario.move.call(luigi, "left"); // [1, 2]
    newPosition = mario.move.call(luigi, "left"); // [0, 2]
    newPosition = mario.move.call(luigi, "up"); // [0, 3]
    newPosition = mario.move.call(luigi, "right"); // [1, 3]

    expect(newPosition).toEqual([1, 3]);
    expect(luigi.position).toEqual([1, 3]);
    expect(newPosition).not.toBe(luigi.position);
  });

  it("moves up", () => {
    // Creating a separate object ensures that we don't mutate the original
    // object when we call the `.move()` method.
    const luigi = { position: [0, 0] };
    mario.move.call(luigi, "up");
    expect(luigi.position).toEqual([0, 1]);
  });

  it("moves right", () => {
    // Creating a separate object ensures that we don't mutate the original
    // object when we call the `.move()` method.
    const luigi = { position: [0, 0] };
    mario.move.call(luigi, "right");
    expect(luigi.position).toEqual([1, 0]);
  });

  it("moves down", () => {
    // Creating a separate object ensures that we don't mutate the original
    // object when we call the `.move()` method.
    const luigi = { position: [0, 0] };
    mario.move.call(luigi, "down");
    expect(luigi.position).toEqual([0, -1]);
  });

  it("moves left", () => {
    // Creating a separate object ensures that we don't mutate the original
    // object when we call the `.move()` method.
    const luigi = { position: [0, 0] };
    mario.move.call(luigi, "left");
    expect(luigi.position).toEqual([-1, 0]);
  });
});

describe("mario.takeDamage()", () => {
  it("is a function", () => {
    expect(typeof mario.takeDamage).toBe("function");
  });

  it("has one parameter", () => {
    expect(mario.takeDamage).toHaveLength(1);
  });

  it("uses the `this` keyword", () => {
    // Calling the method on a separate object tests that the `this` keyword
    // was used.
    const luigi = { health: 100, armor: 100 };
    mario.takeDamage.call(luigi, 250);
    expect(luigi.health).toBe(0);
    expect(luigi.armor).toBe(0);

    // Calling the method on a separate object tests that the `this` keyword
    // was used.
    const wario = { health: 100, armor: 100 };
    mario.takeDamage.call(wario, 130);
    expect(wario.health).toBe(70);
    expect(wario.armor).toBe(0);

    // Calling the method on a separate object tests that the `this` keyword
    // was used.
    const waluigi = { health: 100, armor: 100 };
    mario.takeDamage.call(waluigi, 20);
    expect(waluigi.health).toBe(100);
    expect(waluigi.armor).toBe(80);
  });

  it("returns an object with `health` and `armor` properties only", () => {
    // Creating a separate object ensures that we don't mutate the original
    // object when we call the `.takeDamage()` method.
    const luigi = { health: 100, armor: 100 };
    const luigiStats = mario.takeDamage.call(luigi, 250);
    expect(luigiStats).toStrictEqual({ health: 0, armor: 0 });

    // Creating a separate object ensures that we don't mutate the original
    // object when we call the `.takeDamage()` method.
    const wario = { health: 100, armor: 100 };
    const warioStats = mario.takeDamage.call(wario, 130);
    expect(warioStats).toStrictEqual({ health: 70, armor: 0 });

    // Creating a separate object ensures that we don't mutate the original
    // object when we call the `.takeDamage()` method.
    const waluigi = { health: 100, armor: 100 };
    const waluigiStats = mario.takeDamage.call(waluigi, 20);
    expect(waluigiStats).toStrictEqual({ health: 100, armor: 80 });
  });

  it("depletes armor and health if enough damage", () => {
    // Creating a separate object ensures that we don't mutate the original
    // object when we call the `.takeDamage()` method.
    const luigi = { health: 100, armor: 100 };
    mario.takeDamage.call(luigi, 250);
    expect(luigi.health).toBe(0);
    expect(luigi.armor).toBe(0);
  });

  it("depletes armor and damages health if needed", () => {
    // Creating a separate object ensures that we don't mutate the original
    // object when we call the `.takeDamage()` method.
    const luigi = { health: 100, armor: 100 };
    mario.takeDamage.call(luigi, 130);
    expect(luigi.health).toBe(70);
    expect(luigi.armor).toBe(0);
  });

  it("damages armor but not health if possible", () => {
    // Creating a separate object ensures that we don't mutate the original
    // object when we call the `.takeDamage()` method.
    const luigi = { health: 100, armor: 100 };
    mario.takeDamage.call(luigi, 20);
    expect(luigi.health).toBe(100);
    expect(luigi.armor).toBe(80);
  });
});
