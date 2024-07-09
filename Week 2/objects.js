const person = {
  name: "Angelica Daniels",
  age: 35,
  profession: "Web Developer",
  interests: ["coding", "reading", "playing guitar"],
};

// DO NOT EDIT
let currentRole;

// Write your code here

currentRole = person.profession;
person.location = "London";

console.log(person);

// METHODS and 'THIS' KEY WORD

const cartoon = {
  name: "Bugs Bunny",
  species: "Rabbit",
  age: 80,
  occupation: "Trickster",
  catchphrase: "What's up, Doc?",
  friends: ["Daffy Duck", "Porky Pig", "Tweety Bird"],
  enemies: ["Elmer Fudd", "Yosemite Sam", "Marvin the Martian"],
  imageUrl:
    "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/1200px-Bugs_Bunny.svg.png",
  // Define your method here
  characterInfo() {
    return `Name: ${this.name} and Occupation: ${this.occupation}`;
  },
};

console.log("Method output: ", cartoon.characterInfo());

console.log(cartoon);

// STR METHODS

// DO NOT EDIT
let phrase = "I am learning how to use string methods.";
let strLen;
let words;

// Write your code here

phrase = phrase.toUpperCase();

strLen = phrase.length;

words = phrase.split(" ");

console.log(phrase);

console.log(strLen);

console.log(words);

// OBJECTS TASKS

// Write your code here

const car = {
  model: "Nissan",
  color: "Blue",
  numWheels: 4,
  drive() {
    return "Vroom!";
  },
};

console.log(car);
