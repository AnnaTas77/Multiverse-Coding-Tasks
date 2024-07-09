/* Backspace Coding Challenge 
Directions: Complete the following steps:   

 

Add a backspace() method to the object. The method should remove the final character from the array that the document property is assigned to. It should also return the character that was removed.
Test your code! Once all tests are passing, move on to the next page.
Example
const textEditor = {
  document: ["H", "i"],
  // Your method would be here...
};

console.log(textEditor.document); // Logs ["H", "i"];

const removed = textEditor.backspace();
console.log(removed); // Logs "i"

console.log(textEditor.document); // Logs ["H"]; */

const textEditor = {
  document: ["H", "i", ",", " ", "W", "o", "r", "l", "d"],
  // Define your method here
  backspace() {
    return this.document.pop();
  },
};

// DO NOT EDIT
module.exports = textEditor;
