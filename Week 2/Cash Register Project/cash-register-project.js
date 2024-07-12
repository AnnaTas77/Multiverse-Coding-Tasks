/** GOAL: In index.js, there are a collection of functions which provide functionality for a cash register to be used by a point-of-sale system. Your task is to complete the functions by writing the logic to meet the specifications below:

Level 1:
removeItem(name, drawer): Removes a single item from the drawer
addItem(name, drawer): Adds a single item to the drawer
Level 2:
countCoins(drawer): Counts how many coins are in the drawer
countNotes(drawer): Counts how many notes/bills are in the drawer
Level 3:
sumDrawer(drawer): Calculates the total amount of money in the drawer as a string formatted in dollars (see example below)
Level 4:
canMakeAmount(target, drawer): Determines whether it is possible to create a specific cash amount from the items in the drawer.
Level 5:
transaction(cost, paid, drawer): Calculates the change required from a transaction and removes it from the drawer if possible. */

const drawer = require("./drawer");
// DO NOT EDIT CODE ABOVE

// Level 1: removeItem and addItem

function removeItem(name, drawer) {
  // Write your code here
  for (let i = 0; i < drawer.length; i++) {
    const currentInnerObject = drawer[i];
    //   console.log('Before: ', currentInnerObject)
    if (currentInnerObject.name === name) {
      currentInnerObject.quantity -= 1;
      break;
    }
  }
  return drawer;
}
const returnedDrawer = removeItem("penny", drawer); // Removes 1 penny
console.log(returnedDrawer);

function addItem(name, drawer) {
  // Write your code here
  for (let i = 0; i < drawer.length; i++) {
    const currentInnerObject = drawer[i];
    //   console.log('Before Adding: ', currentInnerObject)
    if (currentInnerObject.name === name) {
      currentInnerObject.quantity += 1;
      break;
    }
  }
  return drawer;
}
const updatedDrawer = addItem("nickel", drawer); // Adds 1 nickel
console.log(updatedDrawer);

// Level 2: countCoins and countNotes
function countCoins(drawer) {
  // Write your code here
}

function countNotes(drawer) {
  // Write your code here
}

// Level 3: sumDrawer

function sumDrawer(drawer) {
  // Write your code here
}

// Level 4: canMakeAmount

function canMakeAmount(target, drawer) {
  // Write your code here
}

// Level 5: transaction

function transaction(cost, paid, drawer) {
  // Write your code here
}

// DO NOT EDIT CODE BELOW
module.exports = {
  removeItem,
  addItem,
  countCoins,
  countNotes,
  sumDrawer,
  canMakeAmount,
  transaction,
};
