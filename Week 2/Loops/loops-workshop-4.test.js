const { letterCount } = require("./loops-workshop-4");

test("letterCount returns an object", () => {
  const names = ["Muhammad", "Sofia", "Juan", "Amira"];
  const result = letterCount(names);
  expect(typeof result).toEqual("object");
});

test("letterCount returns an object with letter instances (case sensitive)", () => {
  const names = ["Muhammad", "Sofia", "Juan", "Amira"];
  const result = letterCount(names);
  expect(result).toEqual({
    A: 1,
    J: 1,
    M: 1,
    S: 1,
    a: 5,
    d: 1,
    f: 1,
    h: 1,
    i: 2,
    m: 3,
    n: 1,
    o: 1,
    r: 1,
    u: 2,
  });
});

test("letterCount returns an object with letter instances (case sensitive)", () => {
  const names = [
    "Muhammad",
    "Sofia",
    "Juan",
    "Amira",
    "William",
    "Mei Ling",
    "Ahmed",
    "Emeka",
    "Elena",
    "Malik",
    "Fatima",
    "Carlos",
    "Priya",
    "Sofia",
    "Juan",
    "Jacob",
    "Aisha",
    "Santiago",
    "Yara",
    "Ethan",
    "Ananya",
    "Ryan",
    "Aisha",
    "Ahmed",
  ];
  const result = letterCount(names);
  expect(result).toEqual({
    M: 3,
    u: 3,
    h: 6,
    a: 26,
    m: 8,
    d: 3,
    S: 3,
    o: 5,
    f: 2,
    i: 13,
    J: 3,
    n: 9,
    A: 6,
    r: 4,
    W: 1,
    l: 5,
    e: 5,
    E: 3,
    k: 2,
    F: 1,
    t: 3,
    C: 1,
    s: 3,
    P: 1,
    y: 3,
    c: 1,
    b: 1,
    g: 2,
    Y: 1,
    R: 1,
    L: 1,
  });
});
