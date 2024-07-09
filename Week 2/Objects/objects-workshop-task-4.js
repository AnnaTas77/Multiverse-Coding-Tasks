/** Save and Restore Coding Challenge 
Your users want to save their work, but they also want to restore old versions in case they realize they've made errors. We've added a textEditor.history property that is assigned to an array.ß 

Directions: Complete the following steps:   


Save
Add a save() method to the object. The method should add a copy of textEditor.document to textEditor.history. It should also return the object itself (remember to use the this keyword).
Test your code! Once all tests are passing, move on to the second part of this exercise.
Example
const textEditor = {
  document: ["H", "i"],
  history: [],
  // Your method would be here...
};

console.log(textEditor.history); // Logs []

textEditor.save();

console.log(textEditor.history); // Logs [["H", "i"]]
console.log(textEditor.document === textEditor.history[0]); // Logs false
Restore
Add a restore(i) method to the object. The value of i will be an integer. The method should assign textEditor.document to a copy of textEditor.history[i]. The method should also return the object itself (remember to use the this keyword).
Test your code! Once all tests are passing, move on to the next page.
Example
const textEditor = {
  document: ["H", "i"],
  history: [],
  // Your method would be here...
};

console.log(textEditor.history); // Logs []

textEditor.save();

console.log(textEditor.history); // Logs [["H", "i"]]

// Using the `.addCharacter()` method from a previous exercise.
textEditor.addCharacter("!");

textEditor.save();

console.log(textEditor.history); // Logs [["H", "i"], ["H", "i", "!"]]

textEditor.restore(0);

console.log(textEditor.document); // Logs ["H", "i"]
console.log(textEditor.history); // Logs [["H", "i"], ["H", "i", "!"]]
console.log(textEditor.document === textEditor.history[0]); // Logs false */

const textEditor = {
  document: ["H", "i", ",", " ", "W", "o", "r", "l", "d"],
  history: [],
  // Define your methods here
  save() {
    const copyOfDocument = structuredClone(this.document);
    this.history.push(copyOfDocument);
    return this;
  },
  restore(i) {
    const copyOfHistory = structuredClone(this.history[i]);
    this.document = copyOfHistory;
    return this;
  },
};

// DO NOT EDIT
module.exports = textEditor;
