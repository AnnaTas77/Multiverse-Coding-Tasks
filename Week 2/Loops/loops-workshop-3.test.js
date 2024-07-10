const { namesObj } = require("./loops-workshop-3");

test("namesObj returns an object", () => {
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
  const namesTest = namesObj(names);
  expect(typeof namesTest).toEqual("object");
});

test("namesObj returns an object with correct values", () => {
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
  const namesTest = namesObj(names);
  expect(namesTest).toEqual({
    Muhammad: 1,
    Sofia: 2,
    Juan: 2,
    Amira: 1,
    William: 1,
    "Mei Ling": 1,
    Ahmed: 2,
    Emeka: 1,
    Elena: 1,
    Malik: 1,
    Fatima: 1,
    Carlos: 1,
    Priya: 1,
    Jacob: 1,
    Aisha: 2,
    Santiago: 1,
    Yara: 1,
    Ethan: 1,
    Ananya: 1,
    Ryan: 1,
  });
});

test("namesObj returns an object with correct values", () => {
  const names = [
    "Muhammad",
    "Sofia",
    "Juan",
    "Amira",
    "Muhammad",
    "Sofia",
    "Juan",
    "Sofia",
    "Juan",
  ];
  const namesTest = namesObj(names);
  expect(namesTest).toEqual({
    Muhammad: 2,
    Sofia: 3,
    Juan: 3,
    Amira: 1,
  });
});
