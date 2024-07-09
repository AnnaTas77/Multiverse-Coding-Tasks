/*  Text Editor Coding Challenge 
Your company has decided to release a new product: a text editor! This product is designed to make its users’ text editing tasks as easy as possible and will be packed with features: adding text, deleting text, and more!

 

Your squad is pulling together the minimum viable product (MVP) and has decided to use objects to store values and methods.

 

The content the user is typing will be stored as an array of strings: one entry for each character (including spaces).

const textEditor = {
  document: ["H", "i", ",", " ", "W", "o", "r", "l", "d"],
};
Directions: Complete the following steps:   

 

addCharacter(char)
The first feature is to allow the user to add a character to the document.

Add an addCharacter(char) method to the object. The value of the char parameter will be a string with a length of 1. The method should add the value of the char parameter to the end of the array that the document property is assigned to. It should also return the object, which allows the method to be chained (see the example below). Remember to use the this keyword.
Test your code! Once all tests are passing, move on to the next page.
Example
const textEditor = {
  document: ["H", "i"],
  // Your method would be here...
};

console.log(textEditor.document); // Logs ["H", "i"];
textEditor.addCharacter("!").addCharacter("!").addCharacter("!");
console.log(textEditor.document); // Logs ["H", "i", "!", "!", "!"];
Hint: Try to remember the array methods you learned. */


const textEditor = {
  document: ["H", "i", ",", " ", "W", "o", "r", "l", "d"],
  // Define your method here
  addCharacter(char) {
    this.document.push(char);
    return this;
  },
};




// DO NOT EDIT
module.exports = textEditor;
