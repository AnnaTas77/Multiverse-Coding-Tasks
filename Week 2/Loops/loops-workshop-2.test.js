const { duplicateNames } = require("./loops-workshop-2");

test("duplicateNames returns a number", () => {
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
  const testArr = duplicateNames(names);
  expect(typeof testArr).toEqual("number");
});

test("duplicateNames returns correct count of duplicates - EXAMPLE #1", () => {
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
  const testArr = duplicateNames(names);
  expect(testArr).toEqual(4);
});

test("duplicateNames returns correct count of duplicates - Example #2", () => {
  const names2 = ["Muhammad", "Sofia", "Juan", "Amira"];
  const testArr = duplicateNames(names2);
  expect(testArr).toEqual(0);
});
