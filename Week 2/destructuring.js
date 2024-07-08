// ARRAY DESTRUCTURING

function fullName([last, first]) {
  return first + " " + last;
}

console.log(fullName(["Tasheva", "Anna"]));

let numbers = [1, 2, 3, 4, 5];
const [firstNum, secondNum, thirdNum] = numbers;

console.log(firstNum, secondNum, thirdNum);

// NESTED ARRAYS

let nestedArrs = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let [firstArr, secondArr, thirdArr] = nestedArrs;

console.log(firstArr, secondArr, thirdArr);

// OBJECT DESTRUCTURING

const car = {
  brand: "Ford",
  year: 2015,
  color: "blue",
};

let { brand, color } = car;
console.log(brand, color);

// NESTED OBJECTS

let address = { street: "12 Benson Street", city: "Maryland", state: "Lagos" };
let person = { name: "Adams Ade", age: 25, address };

const {
  name,
  age,
  address: { city },
} = person;

console.log("PERSON: ", person);

console.log(name, age, city);

// DEFAULT VALUES in OBJECTS

const job1 = {
  role: "Software Engineer",
  pay: 150000,
  applicationLink: "meta.com/careers/SWE-role/apply",
};
let { role, pay, isRemote = false } = job1;
console.log(isRemote);

// ALIAS in OBJECTS

const job2 = {
  role: "Software Engineer",
  salary: 200000,
  applicationLink: "meta.com/careers/SWE-role/apply",
};
let { role: jobTitle, salary } = job2;
console.log(jobTitle);
