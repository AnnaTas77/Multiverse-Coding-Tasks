const { greet } = require("./loops-workshop-1");

test("greet returns an array", () => {
  const names = ["Muhammad", "Sofia", "Juan", "Amira"];
  const testNames = greet(names);
  expect(Array.isArray(testNames)).toEqual(true);
});

test("greet returns an array", () => {
  const names = ["Muhammad", "Sofia", "Juan", "Amira"];
  const testNames = greet(names);
  expect(names).toEqual([
    "Hello my name is Muhammad",
    "Hello my name is Sofia",
    "Hello my name is Juan",
    "Hello my name is Amira",
  ]);
});

test("greet returns an array", () => {
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

  const testNames = greet(names);
  expect(names).toEqual([
    "Hello my name is Muhammad",
    "Hello my name is Sofia",
    "Hello my name is Juan",
    "Hello my name is Amira",
    "Hello my name is William",
    "Hello my name is Mei Ling",
    "Hello my name is Ahmed",
    "Hello my name is Emeka",
    "Hello my name is Elena",
    "Hello my name is Malik",
    "Hello my name is Fatima",
    "Hello my name is Carlos",
    "Hello my name is Priya",
    "Hello my name is Sofia",
    "Hello my name is Juan",
    "Hello my name is Jacob",
    "Hello my name is Aisha",
    "Hello my name is Santiago",
    "Hello my name is Yara",
    "Hello my name is Ethan",
    "Hello my name is Ananya",
    "Hello my name is Ryan",
    "Hello my name is Aisha",
    "Hello my name is Ahmed",
  ]);
});
