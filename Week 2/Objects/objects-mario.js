/* Mario
A mario constant has been assigned to an object that represents Mario. The position property represents Mario's x and y coordinates as an array. The health and armor properties represent Mario's health and armor as numbers from 0 to 100.

 
Action Item: Mario Coding Challenge
Directions: 

 

move(direction)
Add a move(direction) method to the object.

The value of the direction parameter will be "up", "right", "down", or "left".
The method should modify the value of the object's position property according to the direction that is passed in, where "up" and "right" are positive and "down" and "left" are negative.
The method should return a copy of the array that the position property is assigned to.
Test your code! Once all tests are passing, move on to the second challenge.

 

Example
const mario = {
  position: [0, 0],
  // Your method would be here...
};

console.log(mario.position); // Logs [0, 0]

let newPosition = mario.move("right");
newPosition = mario.move("down");
newPosition = mario.move("down");

console.log(newPosition); // Logs [1, -2]
console.log(newPosition === mario.position); // Logs false
Copying an array
To complete this challenge, you need to know how to create a copy of an array. There are several ways to do this. Because we've already covered the .slice() method, we'll use that. If you call it without any arguments, it will return a shallow copy of the entire array.

 

const fruits = ["apple", "banana", "cherry"];
const copy = fruits.slice();

console.log(copy); // Logs ["apple", "banana", "cherry"]
console.log(fruits === copy); // Logs false (because they are separate arrays)
Optional reading: Why a copy?
 

takeDamage(amount)
Add a takeDamage(amount) method to the object.

The value of the amount parameter will be a number.
If the value of the amount parameter exceeds the combined values of the health and armor properties, both properties should be set to 0.
If the value of the amount parameter exceeds the value of the armor property, the armor property should absorb as much damage as possible and be set to 0. The remaining damage should be deducted from the value of the health property.
If the value of the amount parameter does not exceed the value of the armor property, the method should deduct the value of the amount parameter from the value of the armor property.
The method should return a new object with health and armor properties assigned to Mario's remaining health and armor. The returned object should not have any other properties.
Test your code! Once all tests are passing, move on to the next page.

 

Example
const mario = {
  health: 100,
  armor: 100,
  // Your method would be here...
};

console.log(mario.health, mario.armor); // Logs 100, 100

let stats = mario.takeDamage(75);
console.log(stats); // Logs { health: 100, armor: 25 }

stats = mario.takeDamage(75);
console.log(stats); // Logs { health: 50, armor: 0 }

stats = mario.takeDamage(75);
console.log(stats); // Logs { health: 0, armor: 0 } */

const mario = {
  position: [0, 0], //x, y
  health: 100,
  armor: 100,
  // Define your methods here
  move(direction) {
    if (direction === "up") {
      this.position[1] += 1;
      return [...this.position];
    } else if (direction === "right") {
      this.position[0] += 1;
      return [...this.position];
    } else if (direction === "down") {
      this.position[1] -= 1;
      return [...this.position];
    } else if (direction === "left") {
      this.position[0] -= 1;
      //   return [...this.position];
      return Array.from(this.position); // SHALLOW COPY
    }
  },
  takeDamage(amount) {
    if (amount > this.health + this.armor) {
      this.health = 0;
      this.armor = 0;
    }
    if (amount > this.armor) {
      let damageLeft = amount - this.armor;
      this.armor = 0;
      this.health -= damageLeft;
      if (this.health < 0) {
        this.health = 0;
      }
    }
    if (amount <= this.armor) {
      this.armor -= amount;
    }

    return { health: this.health, armor: this.armor };
    // the properties in the object in the return statement are primitive values => this creates a deep copy of the object
  },
};

// DO NOT EDIT
module.exports = mario;
