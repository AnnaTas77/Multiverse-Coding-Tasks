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

const car2 = {
  model: "Ford",
  color: "Green",
  numWheels: 4,
  // Define your method here
  paint(newColor) {
    this.color = newColor;
    return this.color;
  },
};

console.log("Before: ", car.color);
console.log(car2.paint("Black"));
// console.log("After: ", car.color);

/** To Do Coding Challenge 
Directions: Complete the following steps:   

A todo constant has been assigned to an object that represents an item on a to-do list.

Add a toggleDone() method to the object. If the value of the object's done property is true, the method should change it to false. If the value of the object's done property is false, the method should change it to true. In both cases, the method should return the new value of the object's done property.
Test your code! Once all tests are passing, move on to the next page.
Example
const todo = {
  description: "Wash the car",
  done: false,
  // Your method would be here...
};

console.log(todo.done); // Logs false
todo.toggleDone();
console.log(todo.done); // Logs true */

const todo = {
  description: "Wash the car",
  done: false,
  // Define your method here
  toggleDone() {
    return (this.done = !this.done);
  },
};

console.log(todo.toggleDone());
console.log(todo.toggleDone());
console.log(todo.toggleDone());

/** Wallet Coding Challenge 
Directions: Complete the following steps:   

A wallet constant has been assigned to an object that represents a wallet.

Add a hasCash() method to the object. It should return true if the value of the object's balance property is greater than 0, otherwise it should return false.
Add a pay(amount) method to the object. It should attempt to subtract the value of the amount parameter from the value of the object's balance property. If there is enough money, the method should return true after subtracting the amount. Otherwise, the method should leave the balance property unchanged and simply return false.
Test your code! Once all tests are passing, move on to the next page. 

Example
const wallet = {
  balance: 10,
  // Your methods would be here...
};

if (wallet.hasCash() && wallet.pay(5.5)) {
  // Logs "Your new balance is 4.5."
  console.log(`Your new balance is ${wallet.balance}.`);
} else {
  console.log("Insufficient funds.");
} */

// const wallet = {
//   balance: 9.52,
//   // Define your methods here
//   hasCash() {
//     if (this.balance > 0) {
//       return true;
//     } else {
//       return false;
//     }
//   },
//   pay(amount) {
//     if (this.balance >= amount) {
//       this.balance -= amount;
//       return true;
//     } else {
//       return false;
//     }
//   },
// };

// // DO NOT EDIT
// module.exports = wallet;

// OBJECTS EXTENSION

/* Update Prop Coding Challenge
Directions: 

 

Define a function updateProp(obj, key, val). The values of the parameters will be an object to update (obj), a property name as a string (key), and a value for the property (val). The function should assign obj[key] to val and return the new value of the property.
Test your code! Once all tests are passing, move on to the next page.
Examples
const wallet = {
  color: "black",
  hasCash: true,
};

const newColor = updateProp(wallet, "color", "blue");
console.log(wallet.color); // Logs "blue"
console.log(newColor); // Logs "blue"

const house = {
  sqFt: 1500,
  isOccupied: true,
};

const newSqFt = updateProp(house, "sqFt", 2000);
console.log(house.sqFt); // Logs 2000
console.log(newSqFt); // Logs 2000

Hint: Remember that there is a difference between obj[key] and obj["key"]. 
*/

// Provided for optional debugging
const wallet2 = {
  color: "black",
  hasCash: true,
};

// Write your code here

const updateProp = (obj, key, val) => {
  obj[key] = val;
  return obj[key];
};

console.log("Updates wallet2: ", updateProp(wallet2, "color", "red"));
