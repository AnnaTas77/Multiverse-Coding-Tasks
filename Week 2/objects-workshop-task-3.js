/** Character Count Coding Challenge 
Your users want to know how many characters are in the document (including spaces).

Directions: Complete the following steps:   

 

Add a characterCount() method to the object. The method should return the length of the array that the document property is assigned to.
Test your code! Once all tests are passing, move on to the next page.
Example
const textEditor = {
  document: ["H", "i"],
  // Your method would be here...
};

const count = textEditor.characterCount();
console.log(count); // Logs 2 */

const textEditor = {
  document: ["H", "i", ",", " ", "W", "o", "r", "l", "d"],
  // Define your method here

  characterCount() {
    return this.document.length;
  },
};

// DO NOT EDIT
module.exports = textEditor;
